import { Box, Button, FormControl, TextField, Typography, Input, InputAdornment, IconButton, InputLabel, FormHelperText } from "@mui/material";
// es-lint-disable-next-line
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { fetchService } from "../../services/fetch.service";
import { useAuth } from "./AuthContext";

import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

type LoginData = {
    email: string,
    password: string
}

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FieldValues>({ mode: 'onChange' });
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const onSubmit = async (data: LoginData): Promise<void> => {
        try {
            const response = await fetchService('/auth/login', 'POST', data);
            const { login } = useAuth();

            console.log(response);
            login(response.data, response.token);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Typography variant="h5" color="initial" sx={{ padding: '2rem' }}>Log in</Typography>
            <Box onSubmit={handleSubmit(onSubmit)} component='form' sx={{ display: 'flex', flexDirection: 'column', margin: '0 auto', gap: '1rem', minWidth: '384px' }}>
                <FormControl>
                    <TextField
                        label="E-mail"
                        {...register('email',
                            {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Please input a valid e-mail address.'
                                }
                            })}
                        variant="standard"
                        error={errors.email && true}
                        helperText={errors.email?.message as string}
                    />
                </FormControl>

                <FormControl variant="standard">
                    <InputLabel htmlFor='password' error={errors.password && true}>Password</InputLabel>
                    <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', {
                            required: true,
                            minLength: {
                                value: 8,
                                message: 'Your password must be between 8 and 24 characters long.'
                            },
                            maxLength: {
                                value: 24,
                                message: 'Your password must be between 8 and 24 characters long.'
                            }
                        })}
                        error={errors.password && true}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        } />
                    <FormHelperText error>{errors.password?.message as string}</FormHelperText>
                </FormControl>

                <FormControl>
                    <Button
                        disabled={!isValid}
                        variant="contained"
                        type="submit"
                    >Log in</Button>
                </FormControl>
            </Box>
        </>
    )
}