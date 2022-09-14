import React from "react";
import { Paper, TextField, Typography, Box } from "@mui/material";
import { BlueButton } from "../../commonStyle/CommonStyle";

export default function Security() {
    return (
        <Paper sx={{ padding: 3, pr: '20%', mt: 8 }}>
            <Box id="account email">
                <Typography fontSize='20px'>
                    Change Password
                </Typography>
                <Typography color='#757575' mt={1} fontSize='14px'>
                    Last change time:2018-02-25
                </Typography>
                <br />
                <TextField fullWidth label="Current password"></TextField>
                <br />
                <br />
                <TextField fullWidth label="New password"></TextField>
                <br />
                <br />
                <TextField fullWidth label="Confirm password"></TextField>
                <br />
                <br />
                <BlueButton>Change password</BlueButton>
            </Box>
            <br />
            <br />
            <Box id="birthday">
                <Typography fontSize='20px'>
                    Recovery email
                </Typography>
                <br />
                <TextField fullWidth helperText="If your Rounx account becomes inaccessible, you can reset your password from this email address" label="Recovery email"></TextField>
                <br />
                <br />
                <BlueButton sx={{ mr: 2 }}>Delete email</BlueButton>
                <BlueButton>Change email</BlueButton>
            </Box>
        </Paper>
    )
}