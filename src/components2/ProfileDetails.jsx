import React from "react";

export default function ProfileDetails({ user }) {
  // Check if user is not logged in (no username)
  if (!user || !user.un.trim()) {
    return (
      <div className="container m-4 p-5 text-center">
        <h3 className="text-danger">Access Denied</h3>
        <p className="lead">Please log in to see your profile.</p>
      </div>
    );
  }

  return (
    <div className="container m-4 p-5 ">
      <h2 className="mb-4">User Profile</h2>
      <h5>
        <strong>Name:</strong> {user.un}
      </h5>
      <h5>
        <strong>Email:</strong> {user.em}
      </h5>
    </div>
  );
}
