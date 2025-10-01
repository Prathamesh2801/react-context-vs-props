import { createContext, useState } from "react";

export const UserContext2 = createContext()


export default function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    function login(userData) {
        setUser(userData)
    }
    function logout(userData) {
        setUser(userData)
    }
    return (
        <UserContext2.Provider value={{ user, login, logout }}>
            {children}
        </UserContext2.Provider>
    )
}
