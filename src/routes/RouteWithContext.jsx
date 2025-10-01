import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "../component_context/Hero";
import Login from "../component_context/Login";
import ProfileDetails from "../component_context/ProfileDetails";
import Navbar from "../component_context/Navbar";
import { UserProvider } from "../context/UserContext1";


export default function RouteWithContext() {
    return (
        <UserProvider> 
            <BrowserRouter>
                <Navbar /> 
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/login" element={<Login />} /> {/* ✅ No props */}
                    <Route path="/profilePage" element={<ProfileDetails />} /> {/* ✅ No props */}
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}