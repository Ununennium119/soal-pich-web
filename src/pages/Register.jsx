import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {register} from "../api/AuthenticationApi";
import {routes} from "../routes";
import {toast} from "react-toastify";

const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('PLAYER');

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            if (password !== confirmPassword) {
                toast.error("Passwords don't match!")
            } else {
                await register({username: username, password: password, role: role});
                toast.success("User registered successfully!")
                navigate(routes.login);
            }
        } catch (err) {
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>Sign Up</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter your username"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password"
                                           className="form-control"
                                           id="password"
                                           placeholder="Enter your password"
                                           required
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                    <input type="password"
                                           className="form-control"
                                           id="confirm-password"
                                           placeholder="Re-enter your password"
                                           required
                                           value={confirmPassword}
                                           onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="role" className="form-label">Role</label>
                                    <select
                                        className="form-control"
                                        id="role"
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value="PLAYER">Player</option>
                                        <option value="DESIGNER">Designer</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <small>Already have an account? <Link to="/login">Log In</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;