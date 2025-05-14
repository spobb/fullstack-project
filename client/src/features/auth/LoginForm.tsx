import { Box, Button, FormControl, TextField, Typography, Input, InputAdornment, IconButton, InputLabel, FormHelperText } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            const user = await response.json();
            console.log(user);
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
                            minLength: { value: 8, message: 'Your password has to be between 8 and 24 characters long.' },
                            maxLength: { value: 24, message: 'Your password has to be between 8 and 24 characters long.' }
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
                    <Button variant="contained" type="submit">Log in</Button>
                </FormControl>
            </Box>
        </>
    )
}