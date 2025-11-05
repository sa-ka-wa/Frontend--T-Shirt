import React, { useState } from "react";
import "./RegisterForm.css";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import Modal from "../../common/Modal/Modal";
import { Link } from "react-router-dom";

const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }

    setLoading(true);
    try {
      await onRegister({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setSuccess("Account created successfully! You can now sign in.");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    console.log("🔗 Redirecting to Google signup...");
    window.location.href = "http://localhost:5000/api/auth/google"; // adjust backend route
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <h1>Join JENGA Street</h1>
          <p>Create your account and start your flow.</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          {error && (
            <Modal onClose={() => setError("")}>
              <p>{error}</p>
            </Modal>
          )}
          {success && (
            <Modal onClose={() => setSuccess("")}>
              <p>{success}</p>
            </Modal>
          )}

          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <Button type="submit" disabled={loading}>
            {loading ? <LoadingSpinner size="small" /> : "Create Account"}
          </Button>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleRegister}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
            />
            Sign up with Google
          </button>
        </form>

        <div className="register-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="link">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
