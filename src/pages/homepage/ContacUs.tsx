import { Box, Typography } from "@mui/material";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <Box margin='5% 15%'>
      <Typography>Contact us</Typography>
      <Box>
        <Box>
          <Typography>Rounx Technology (Dalian) Co., Ltd.</Typography>
          <Typography>Remote Work</Typography>
        </Box>
        <Box>
          <Typography>Working hours</Typography>
          <Typography>Monday-Friday: 8:00 AM - 5:00 PM UTC+8</Typography>
        </Box>
        <Box>
          <Typography>Contact details</Typography>
          <Typography>
            <span>Customer Support: </span>
            <span>support@rounx.com</span>
          </Typography>
          <Typography>
            <span>Business Cooperation: </span>
            <span>business@rounx.com</span>
          </Typography>
          <Typography>
            <span>Online customer service (24 x 7): </span>
            <span>Send message</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}