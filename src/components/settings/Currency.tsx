import React from "react";
import { Paper, TextField, Typography, Box } from "@mui/material";
import { BlueButton } from "../../commonStyle/CommonStyle";

export default function Currency() {
    return (
        <Paper sx={{ padding: 3, pr: '20%' }}>
            <Typography fontSize='20px'>
                Select currency
            </Typography>
            <TextField fullWidth label="CNY"></TextField>
        </Paper>
    )
}