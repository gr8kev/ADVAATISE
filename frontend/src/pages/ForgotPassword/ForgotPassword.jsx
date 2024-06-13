import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";
import BLUE from "../../assets/BLUE.png";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleOtpChange = (e) => setOtp(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    // Construct the URL with the email query parameter
    const url = `https://datacenter.divinelearninghub.com.ng/api/Data/RequestOTP?form=${email}`;

    axios
      .get(url)
      .then((response) => {
        // Log the full response to inspect its structure
        console.log("Response from email verification:", response);

        // Check the response data to determine success
        if (response.status === 200 && response.data === "Successfull") {
          alert("OTP sent to your verified email.");
          setStep(2);
          setError("");
        } else {
          setError("Email verification failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error verifying email:", error);
        setError("Email verification failed. Please try again.");
      });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    axios
      .post(
        "https://datacenter.divinelearninghub.com.ng/api/Data/ForgotPassword",
        {
          email,
          otp,
          newPassword,
        }
      )
      .then((response) => {
        console.log("Password reset successful:", response.data);
        alert("Password reset successful. Please log in.");
        setError("");
        navigate("/Signin");
      })
      .catch((error) => {
        console.error("Error resetting password:", error);
        setError("Password reset failed. Please try again.");
      });
  };

  return (
    <div className="bod">
      <div className="passwordlogo">
        <Link to="/">
          <img src={BLUE} alt="passwordLogo" />
        </Link>
      </div>
      {step === 1 && (
        <div className="forgot-password-container">
          <form className="forgot-password-form" onSubmit={handleEmailSubmit}>
            <h2>Forgot Password</h2>
            <div className="form-group">
              <label htmlFor="email">Enter Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Verify Email</button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="reset-password-container">
          <form className="reset-password-form" onSubmit={handlePasswordSubmit}>
            <h2>Reset Password</h2>
            <div className="form-group">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Reset Password</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
