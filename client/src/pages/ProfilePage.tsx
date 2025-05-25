import { ReactElement, useEffect, useState } from "react";
import { useAuth } from "../features/auth/AuthContext";

import { fetchService } from "../services/fetch.service";

type ProfileData = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    avatar: string,
}

export function ProfilePage(): ReactElement {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { user } = useAuth();

    useEffect(() => {
        (async () => {
            const response = await fetchService('/auth/me', 'GET', null, user?.token);
            if (!response) {
                return;
            }

            setProfile(response.contact);
            setLoading(false);
        })();
    }, [user?.token]);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <p>{profile?.firstName}</p>
            <p>{profile?.lastName}</p>
            <p>{profile?.email}</p>
            <p>{profile?.phone}</p>

            <img src={`${import.meta.env.VITE_AVATAR_DIR}/${profile?.avatar}`} alt={`${profile?.firstName} ${profile?.lastName}`} />
        </>
    )
}