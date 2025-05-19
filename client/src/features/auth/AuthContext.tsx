import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import storageService from "../../services/storage.service";

type User = {
    id: string,
    token: string
}

type AuthContextType = {
    user: User | null,
    login: (userData: User) => void,
    logout: () => void,
    isLoading: boolean,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line
export const useAuth = (): AuthContextType => useContext(AuthContext)!;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = storageService.get<string>('user');
        if (storedUser) setUser(JSON.parse(storedUser));
        setIsLoading(false);
    }, []);

    const login = (userData: User) => {
        storageService.set<string>('user', JSON.stringify(userData));
        setUser(userData);
        return;
    };
    const logout = () => {
        storageService.remove('user');
        setUser(null);
        return navigate('/login');
    };


    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
