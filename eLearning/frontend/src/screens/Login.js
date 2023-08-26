import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Login = (props) => {
  const [authMode, setAuthMode] = useState("signin");
  const [redirectToAdmin, setRedirectToAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const defaultAdminEmail = "admin@gmail.com";
    const defaultAdminPassword = "1234";

    // Check if entered credentials match the default admin credentials
    if (email === defaultAdminEmail && password === defaultAdminPassword) {
      setRedirectToAdmin(true);
    } else {
      alert("Incorrect Credentials!!");
    }
  };

  if (redirectToAdmin) {
    return <Redirect to="/admin" />;
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleFormSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </h3>
          {authMode === "signin" ? (
            <div className="text-center" style={{ cursor: "pointer" }}>
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
          ) : (
            <div className="text-center" style={{ cursor: "pointer" }}>
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
          )}
          {authMode === "signup" && (
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
          )}
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {authMode === "signin" && (
            <p className="text-center mt-2">
              Forgot <Link to="#">password?</Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
