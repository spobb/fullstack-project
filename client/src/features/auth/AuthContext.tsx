import { createContext, ReactNode, useContext, useState } from "react";

// eslint-disable-next-line
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const AuthContext = createContext({});