import React from "react";
import { Paper, TextField, Typography, Box } from "@mui/material";
import { BlueButton } from "../../commonStyle/CommonStyle";

export default function Personal() {
    return (
        <Paper sx={{ padding: 3, pr: '20%', mt: 8 }}>
            <Box id="account email">
                <Typography fontSize='20px'>
                    Account email
                </Typography>
                <br />
                <TextField fullWidth helperText="Used to receive account-related notifications and can be used to reset passwords." label="account email"></TextField>
                <br />
                <br />
                <BlueButton>Change email</BlueButton>
            </Box>
            <br />
            <br />
            <Box id="birthday">
                <Typography fontSize='20px'>
                    Birthday
                </Typography>
                <Typography color='#757575' mt={1} fontSize='14px'>
                    Your birthday is used to personalize experiences across Rounx services.
                </Typography>
                <br />
                <TextField fullWidth helperText="Your birthday is only visible to you." label="account email"></TextField>
                <br />
                <br />
            </Box>
            <Box id="account email">
                <Typography fontSize='20px'>
                    Gender
                </Typography>
                <Typography color='#757575' mt={1} fontSize='14px'>
                    Please enter your gender so that Rounx can call you correctly.
                </Typography>
                <br />
                <TextField fullWidth helperText="Your gender is only visible to you." label="Gender"></TextField>
                <br />
                <br />
            </Box>
            <Box id="account email">
                <Typography fontSize='20px'>
                    Language
                </Typography>
                <br />
                <TextField fullWidth label="Language"></TextField>
                <br />
                <br />
                <BlueButton>Save</BlueButton>
            </Box>
        </Paper>
    )
}