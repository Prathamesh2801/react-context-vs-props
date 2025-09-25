import React from "react";

const Navbar = ({ user, logout }) => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <span>My App</span>
      {user ? (
        <>
          <span style={{ marginLeft: "20px" }}>Welcome, {user.name}</span>
          <button onClick={logout} style={{ marginLeft: "20px" }}>
            Logout
          </button>
        </>
      ) : (
        <span style={{ marginLeft: "20px" }}>Not Logged In</span>
      )}
    </nav>
  );
};

export default Navbar;
