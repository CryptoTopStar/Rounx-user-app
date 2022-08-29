import { Typography, Box, Paper, Divider, Select, Chip } from "@mui/material";
import React from "react";

export default function Skills() {
  return (
    <Box>
      <Typography>
        Submit freelancer application
      </Typography>
      <Paper>
        <Typography>Skills</Typography>
        <Typography>Step 1 of 6</Typography>
        <Divider />
        <Select>

        </Select>
        <Select>

        </Select>
        <Divider />
        <Typography>Selected skills</Typography>
        <Chip label="Android" />
      </Paper>
    </Box>

  )
}