import { Typography, Box, Paper, Divider, TextField, Chip } from "@mui/material";
import React from "react";

export default function Experience() {
  return (
    <Box style={{ margin: '5% 30%' }}>
      <Typography marginBottom='20px' fontSize='24px'>
        Submit freelancer application
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <Typography marginBottom='10px' fontSize='20px' >Experience</Typography>
        <Typography marginBottom='10px' fontSize='16px' color='#757575'> Step 3 of 6</Typography>
        <Divider />
        <Box marginTop='10px'>
          <TextField
            fullWidth
            id="position"
            name="position name"
            label="Position name"
          />
        </Box>
        <Divider />
        <Typography marginBottom='20px'>Selected skills</Typography>
        <Chip label="Android" />
      </Paper>
    </Box>

  )
}