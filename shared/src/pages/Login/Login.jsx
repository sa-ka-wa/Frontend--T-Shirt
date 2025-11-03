// import React from "react";
// // import { AuthContext } from '../../context/AuthContext';  // Comment out for now

// const Login = () => {
//   // Remove AuthContext usage temporarily
//   return (
//     <div className="login-page">
//       <h1>Login Page</h1>
//       <p>Login functionality coming soon...</p>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import LoginForm from "../../components/auth/LoginForm/LoginForm";
import authService from "../../services/api/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    const res = await authService.login(formData.email, formData.password);
    localStorage.setItem("token", res.token);
    navigate("/profile");
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
