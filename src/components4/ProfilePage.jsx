import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ProfilePage() {
  const {user}= useContext(UserContext)
  if (!user.un || !user.em) {
    return (
      <div className="container p-3 m-4">
        <h1>Please Sign in To check your Profile</h1>
      </div>
    );
  }
  return (
    <div className="container p-3 m-4">
      <h1>Profile Details</h1>
      <p>Username : {user.un}</p>
      <p>Email : {user.em}</p>
    </div>
  );
}
