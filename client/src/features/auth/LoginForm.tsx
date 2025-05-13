import {
    Box,
    Button,
    FormControl,
    TextField,
    Typography,
    OutlinedInput,
    InputAdornment,
    IconButton,
    InputLabel
} from "@mui/material";
import {
    Visibility,
    VisibilityOff
} from '@mui/icons-material';

import { useState } from "react";

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleSubmit = () => { }
    return (
        <>
            <Typography variant="h5" color="initial" sx={{ padding: '2rem' }}>Log in</Typography>
            <Box onSubmit={handleSubmit} component='form' sx={{ display: 'flex', flexDirection: 'column', margin: '0 auto', gap: '1rem' }}>
                <FormControl>
                    <TextField label="e-mail" id="email" variant="outlined" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        } />
                </FormControl>
                <FormControl>
                    <Button variant="contained">Log in</Button>
                </FormControl>
            </Box>
        </>
    )
}