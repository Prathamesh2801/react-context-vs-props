import React from "react";

import { createContext } from "react";

import useLogin from "../hooks/useLogin";
import useTheme from "../hooks/useTheme";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  
  const {logout,user,setUser} = useLogin();
  const {theme,toggleTheme}= useTheme();


  return (
    <UserContext.Provider value={{ user, setUser, logout,theme,toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
}
