import { ChangeEvent, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { ContactData } from "#types/contactdata.type.ts";

export function FileInput({ register }: { register: UseFormRegister<ContactData> }) {
    const [file, setFile] = useState<string | null>(null);

    function handleClick() {
        document.getElementById('file-input')?.click();
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const fileName = event.target.files?.[0];
        if (fileName) setFile(fileName.name);
    }

    const { ref, onChange, ...rest } = register('avatar');

    return (
        <Box flexGrow={1}>
            <input
                type="file"
                id="file-input"
                accept=".png,.jpg"
                style={{ display: 'none' }}
                onChange={(e) => { handleChange(e); onChange(e); }}
                ref={ref}
                {...rest}
            />

            <Button variant="contained" onClick={handleClick} color="primary">
                choose file
            </Button>

            <Typography variant="body2" color="grey">
                {file || 'No file selected.'}
            </Typography>
        </Box>)
};