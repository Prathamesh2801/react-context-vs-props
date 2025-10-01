import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Hero from "../components2/Hero";
import Login from "../components2/Login";
import ProfileDetails from "../components2/ProfileDetails";
import Navbar from "../components2/Navbar";
import { useState } from "react";

export default function RouteWithProps() {
    const [user, setUser] = useState(null);


    const handleLogout = () => {
        setUser(null);
        window.location.href = "/"
    };


    return (
        <BrowserRouter>
            <Navbar user={user} logout={handleLogout} />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/profilePage" element={<ProfileDetails user={user} />} />
            </Routes>
        </BrowserRouter>
    )
}
