import React from "react";
import RegisterForm from "../../components/auth/RegisterForm/RegisterForm";
import authService from "../../services/api/authService"; // ✅ handle API logic here
import { useNavigate } from "react-router-dom";
import "../../components/auth/RegisterForm/RegisterForm.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      console.log("📦 Sending registration data:", formData);
      // ✅ Call your backend service
      const res = await authService.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      // ✅ Check what the backend returned
      if (res?.access_token) {
        localStorage.setItem("token", res.access_token);
      }
      if (res?.user) {
        localStorage.setItem("user", JSON.stringify(res.user));
      }

      // ✅ Option 1: Go straight to profile
      navigate("/profile");

      // ✅ Option 2 (optional): Redirect to login
      // navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);
      alert(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="register-page">
      {/* Pass the handler down to the form */}
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default Register;
