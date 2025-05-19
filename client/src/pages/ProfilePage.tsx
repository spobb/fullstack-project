import { useEffect, useState } from "react";
import { useAuth } from "../features/auth/AuthContext";

import { fetchService } from "../services/fetch.service";

type ProfileData = {
    firstName: string,
    lastName: string,
    email: string
}

export const ProfilePage = () => {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const { user } = useAuth();

    useEffect(() => {
        (async () => {
            const response = await fetchService('/auth/me', 'GET', null, user?.token);
            if (!response) {
                return;
            }

            setProfile(response.contact);
        })();
    }, [user]);


    return (
        <>
            <p>{profile?.firstName}</p>
        </>
    )
}