import React from 'react'

const Login = ({doLogin}) =>
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <form>
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="email">User Name</label>
                    <input type="text" className="form-control" id="email" aria-describedby="emailHelp"
                           placeholder="Enter UserName" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => doLogin(
                    document.getElementById("email").value,
                    document.getElementById("password").value)}>Submit</button>
            </form>

        </div>
    </div>
export default Login;