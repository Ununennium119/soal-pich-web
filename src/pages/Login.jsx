import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getCurrentUser, login} from "../api/AuthenticationApi";
import {routes} from "../routes";
import {useToast} from "../context/ToastContext";

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { addToast } = useToast();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await login({username: username, password: password});
            if (response && response.token) {
                localStorage.setItem('jwtToken', response.token);
                const user = await getCurrentUser()
                if (user.role === 'designer') {
                    navigate(routes.designerQuestions);
                } else {
                    navigate(routes.playerQuestions);
                }
            } else {
                addToast("Something went wrong!", 'error')
            }
        } catch (err) {
            err.response.data.errors.forEach((error) => {
                Object.values(error['constraints']).forEach((constraint) => {
                    addToast(constraint, 'error')
                })
            })
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter your username"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                Don't have an account? <Link to="/register">Register</Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;