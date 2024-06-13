import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import BLUE from "../../assets/BLUE.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://datacenter.divinelearninghub.com.ng/api/Data/Loginv1",
        {
          Email: username,
          Password: password,
        }
      );

      const data = response.data;

      localStorage.setItem("accesskey", data.accesskey);
      localStorage.setItem("Fullname", data.Fullname);
      localStorage.setItem("email", data.email);
      localStorage.setItem("companyname", data.companyname);
      localStorage.setItem("companyaddress", data.companyaddress);
      localStorage.setItem("role", data.role);

      console.log("Login successful", data);
      alert("Login successful click ok to proceed! ");
      navigate("/");
    } catch (error) {
      console.error("There was an error logging in!", error);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="arrange">
      <div className="loginlogo">
        <Link to="/">
          <img src={BLUE} alt="Company Logo" />
        </Link>
      </div>

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="login-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="login-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className="forgot-password">
            <Link to="/ForgotPassword">Forgot Password?</Link>
            <br />
            <p>
              Don't have an account? <Link to="/Form">Signup here</Link>
            </p>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
