import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ReactElement, ReactNode } from "react";

export function ProtectedRoute({ children, roles }: { children: ReactNode, roles?: string[] }): ReactElement {
    const location = useLocation();
    const { user, isLoading } = useAuth();

    if (isLoading) return <p>Loading...</p>

    if (roles) return <p>roles</p>;

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (<>
        {children}
    </>)
};