import { ReactElement } from "react";
import { Typography } from "@mui/material";

import { Typewriter } from "#components/Typewriter.tsx";

export function HomePage(): ReactElement {
    return (
        <Typography variant="h1" sx={{ textShadow: '1rem 1rem 2px #0001' }}>
            <Typewriter string='Welcome to the Contact. app.' delay={100} />
        </Typography >
    )
}