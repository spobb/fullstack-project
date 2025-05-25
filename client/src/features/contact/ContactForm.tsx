import { ContactData } from "#types/contactdata.type";
import { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Typography, Box, FormControl, TextField, Button, Stack } from "@mui/material";
import { FileInput } from "#components/FileInput.tsx";
import storageService from "#services/storage.service.ts";

export function ContactForm(): ReactElement {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ContactData>({ mode: 'onChange' });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ContactData> = async (data) => {
        try {

            const formData = new FormData();

            formData.append('firstName', data?.firstName);
            formData.append('lastName', data?.lastName);
            formData.append('email', data?.email);
            formData.append('phone', data?.phone);
            formData.append('avatar', data?.avatar[0]);

            const user = storageService.get<{ token: string }>('user');
            const token = user?.token;

            const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log(response, data);

            if (!response) {
                return;
            }
            // navigate('/');

        } catch (err) {
            console.error(err);
        }
    };

    return (<>
        <Typography variant="h5" color="initial" sx={{ padding: '2rem' }}>Register new <strong>Contact.</strong></Typography>
        <Box onSubmit={handleSubmit(onSubmit)} component='form' sx={{ display: 'flex', flexDirection: 'column', margin: '0 auto', gap: '2rem', minWidth: '512px' }}>
            <Stack direction="row" spacing={4}>
                <FormControl sx={{ flexGrow: 1 }}>
                    <TextField
                        label="First Name"
                        placeholder="John"
                        {...register('firstName',
                            {
                                required: 'Your first name is required.',
                                maxLength: { value: 16, message: 'First name cannot be longer than 16 characters.' }
                            })}
                        variant="standard"
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message as string}
                    />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                    <TextField
                        label="Last Name"
                        placeholder="Doe"
                        {...register('lastName',
                            {
                                required: 'Your last name is required.',
                                maxLength: { value: 16, message: 'Last name cannot be longer than 16 characters.' }
                            })}
                        variant="standard"
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message as string}
                    />
                </FormControl>
            </Stack>

            <FormControl>
                <TextField
                    label="E-mail"
                    placeholder="johndoe@example.com"
                    {...register('email',
                        {
                            required: 'Your e-mail is required.',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please input a valid e-mail address.'
                            }
                        })}
                    variant="standard"
                    error={!!errors.email}
                    helperText={errors.email?.message as string}
                />
            </FormControl>

            <FormControl>
                <TextField
                    label="Phone Number"
                    placeholder="+32 123 45 67 89"
                    {...register('phone',
                        {
                            required: 'Your phone number is required.',
                            pattern: {
                                value: /^(\+[0-9 ]+|0+)[0-9 ]+/,
                                message: 'Please input a valid phone number.'
                            }
                        })}
                    variant="standard"
                    error={!!errors.phone}
                    helperText={errors.phone?.message as string}
                />
            </FormControl>

            <FormControl>
                <FileInput register={register} />
            </FormControl>

            <FormControl>
                <Button
                    disabled={!isValid}
                    variant="contained"
                    type="submit"
                >Sign up</Button>
            </FormControl>
        </Box>
    </>);
}