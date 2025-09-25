import React from "react";

const Login = ({ login }) => {
  return (
    <button onClick={() => login("John Doe", "john@example.com")}>
      Login as John Doe
    </button>
  );
};

export default Login;
