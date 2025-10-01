import React from "react";
import Navbar from "./components4/Navbar";
import Hero from "./components4/Hero";
import Login from "./components4/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProfilePage from "./components4/ProfilePage";
import { Toaster } from "react-hot-toast";

import UserProvider from "./context/UserContext";
import RouteWithProps from "./routes/routeWithProps";
import RouteWithContext from "./routes/RouteWithContext";


const App = () => {

  return (
    //  <UserProvider>
    //   <BrowserRouter>
    //     <Toaster
    //       position="top-right"
    //       reverseOrder={false}
    //       toastOptions={{
    //         duration: 2000,
    //         style: {
    //           backgroundColor: "#333",
    //           color: "#FFF",
    //         },
    //       }}
    //     />
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Hero />} />
    //       <Route path="/login" element={<Login  />} />
    //       <Route path="/profilePage" element={<ProfilePage />} />
    //     </Routes>
    //   </BrowserRouter>
    //   </UserProvider>

    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      {/* <RouteWithProps /> */}
      <RouteWithContext/>
    </>
  );
};

export default App;
