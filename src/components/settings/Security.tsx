import React from "react";
import { Paper, TextField, Typography, Box } from "@mui/material";
import { BlueButton } from "../../commonStyle/CommonStyle";

export default function Security() {
    return (
        <Paper sx={{ padding: 3, pr: '20%' }}>
            <Box id="account email">
                <Typography fontSize='20px'>
                    Change Password
                </Typography>
                <Typography color='#757575' mt={1} fontSize='14px'>
                    Last change time:2018-02-25
                </Typography>
                <br />
                <TextField fullWidth label="Current password"></TextField>
                <TextField fullWidth label="New password"></TextField>
                <TextField fullWidth label="Confirm password"></TextField>
                <BlueButton>Change password</BlueButton>
            </Box>
            <br />
            <br />
            <Box id="birthday">
                <Typography fontSize='20px'>
                    Recovery email
                </Typography>
                <Typography color='#757575' mt={1} fontSize='14px'>
                    Last change time:2018-02-25
                </Typography>
                <TextField fullWidth helperText="If your Rounx account becomes inaccessible, you can reset your password from this email address" label="Recovery email"></TextField>
                <BlueButton>Delete email</BlueButton>
                <BlueButton>Change email</BlueButton>
            </Box>
        </Paper>
    )
}