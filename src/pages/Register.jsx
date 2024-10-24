import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>Sign Up</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username"
                                           placeholder="Enter your username" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password"
                                           placeholder="Enter your password" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirm-password"
                                           placeholder="Re-enter your password" required/>
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