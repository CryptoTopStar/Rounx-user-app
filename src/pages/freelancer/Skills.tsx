import { Typography, Box, Paper, Divider, Select, Chip } from "@mui/material";
import React from "react";
import { BlueButton } from "../../commonStyle/CommonStyle";

export default function Skills() {
  return (
    <Box style={{ margin: '5% 30%' }}>
      <Typography marginBottom='20px' fontSize='24px'>
        Submit freelancer application
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <Typography marginBottom='10px' fontSize='20px' >Skills</Typography>
        <Typography fontSize='16px' color='#757575'> Step 1 of 6</Typography>
        <Divider />
        <Divider />
        <Typography marginBottom='20px'>Selected skills</Typography>
        <Chip label="Android" />
        <BlueButton>Next</BlueButton>
      </Paper>
    </Box>

  )
}