import { Box, Button, FormControl, TextField, Typography, Input, InputLabel, FormHelperText } from "@mui/material";
// es-lint-disable-next-line
import { fetchService } from "../../services/fetch.service";
import { useNavigate } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";

import { RegisterData } from "#types/registerdata.type";
import { ReactElement } from "react";

export function RegisterForm(): ReactElement {
    const { register, watch, handleSubmit, formState: { errors, isValid } } = useForm<RegisterData>({ mode: 'onChange' });

    const navigate = useNavigate();
    const password = watch('password');

    const onSubmit: SubmitHandler<RegisterData> = async (data) => {
        try {
            const response = await fetchService('/auth/register', 'POST', { email: data.email, password: data.password });

            if (!response) {
                return;
            }

            navigate('/');

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Typography variant="h5" color="initial" sx={{ padding: '2rem' }}>Sign up</Typography>
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
                        type='password'
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
                    />
                    <FormHelperText error>{errors.password?.message as string}</FormHelperText>
                </FormControl>

                <FormControl variant="standard">
                    <InputLabel htmlFor='cpassword' error={errors.cpassword && true}>Confirm password</InputLabel>
                    <Input
                        id="cpassword"
                        type='password'
                        {...register('cpassword', {
                            required: 'Please confirm your password.',
                            validate: (value) => value === password || 'Passwords do not match.'
                        })}
                        error={errors.cpassword && true}
                    />
                    <FormHelperText error>{errors.cpassword?.message as string}</FormHelperText>
                </FormControl>

                <FormControl>
                    <Button
                        disabled={!isValid}
                        variant="contained"
                        type="submit"
                    >Sign up</Button>
                </FormControl>
            </Box>
        </>
    )
}