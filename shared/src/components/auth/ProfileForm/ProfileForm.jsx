import React, { useState, useEffect } from "react";
import "./ProfileForm.css";

const ProfileForm = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "",
    brand_name: user?.brand_name || "",
    preferences: user?.preferences || {},
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      role: user?.role || "",
      brand_name: user?.brand_name || "",
      preferences: user?.preferences || {},
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          preferences: formData.preferences,
        }),
      });

      if (!res.ok) throw new Error("Failed to update profile");
      const updatedUser = await res.json();

      onUpdate(updatedUser);
      setIsEditing(false);
      alert("✅ Profile updated successfully");
    } catch (err) {
      console.error(err);
      alert("❌ Error updating profile");
    }
  };

  return (
    <div className="profile-form">
      <h2>Profile</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <input name="role" value={formData.role} disabled />
        </div>

        <div className="form-group">
          <label>Brand</label>
          <input name="brand_name" value={formData.brand_name} disabled />
        </div>

        <div className="form-actions">
          {isEditing ? (
            <>
              <button type="submit" className="save-btn">
                Save Changes
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              type="button"
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
