import { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
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
    loading: boolean,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line
export const useAuth = (): AuthContextType => useContext(AuthContext)!;

export function AuthProvider({ children }: { children: ReactNode }): ReactElement {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = storageService.get('user');
        if (storedUser) setUser(storedUser as User);
        setLoading(false);
    }, []);

    const login = (userData: User) => {
        storageService.set<User>('user', userData);
        setUser(userData);
        return;
    };
    const logout = () => {
        storageService.remove('user');
        setUser(null);
        return navigate('/login');
    };


    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
