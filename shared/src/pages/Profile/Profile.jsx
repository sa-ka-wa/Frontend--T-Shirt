import React, { useEffect, useState } from "react";
import ProfileForm from "../../components/auth/ProfileForm/ProfileForm";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching current user from localStorage or API
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleUpdate = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <ProfileForm user={user} onUpdate={handleUpdate} />
    </div>
  );
};

export default Profile;
