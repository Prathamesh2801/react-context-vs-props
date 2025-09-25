import React from "react";

const Profile = ({ user }) => {
  if (!user) return <p>Please log in to see your profile.</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
