import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const ProtectedRoute = ({ roles }: { roles: string[] }) => {
    const location = useLocation();
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
};