import { createContext, useContext, useState } from "react";

// Create the context
const UserContext1 = createContext();


export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => { 
        setUser(null);
    };

    return (
        <UserContext1.Provider value={{ user, login, logout }}>
            {children}
        </UserContext1.Provider>
    );
}


export const useUser = () => {
    const context = useContext(UserContext1);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
