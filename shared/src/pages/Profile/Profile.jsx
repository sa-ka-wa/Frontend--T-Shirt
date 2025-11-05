import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileForm from "../../components/auth/ProfileForm/ProfileForm";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleUpdate = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    // Always redirect to user-app home after update
    navigate("/");
  };

  const goToRoleApp = () => {
    if (!user) return;

    if (user.role === "admin") {
      window.open("http://localhost:3001", "_blank");
    } else if (user.role === "prolific") {
      window.open("http://localhost:3002", "_blank");
    } else if (user.role === "doktari") {
      window.open("http://localhost:3003", "_blank");
    } else {
      alert("No specific app for your role");
    }
  };

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <ProfileForm user={user} onUpdate={handleUpdate} />
      {/* Button to navigate to role-specific app */}
      <button
        onClick={goToRoleApp}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go to Your Dashboard
      </button>
    </div>
  );
};

export default Profile;
