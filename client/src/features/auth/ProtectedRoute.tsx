import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ReactNode } from "react";

export const ProtectedRoute = ({ children, roles }: { children: ReactNode, roles?: string[] }) => {
    const location = useLocation();
    const { user, isLoading } = useAuth();

    if (isLoading) return <p>Loading...</p>

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (<>
        {children}
    </>)
};