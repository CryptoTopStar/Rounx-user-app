import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function ContactUs() {
  return (
    <Box margin='5% 15%'>
      <Typography style={{ fontSize: '24px' }}>Contact us</Typography>
      <br />
      <br />
      <Grid container>
        <Grid item lg={4}>
          <Box>
            <Typography style={{ fontWeight: 'bold', marginBottom: '10px' }}>Rounx Technology (Dalian) Co., Ltd.</Typography>
            <Typography>Remote Work</Typography>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box>
            <Typography style={{ fontWeight: 'bold', marginBottom: '10px' }}>Working hours</Typography>
            <Typography>Monday-Friday: 8:00 AM - 5:00 PM UTC+8</Typography>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box>
            <Typography style={{ fontWeight: 'bold', marginBottom: '10px' }}>Contact details</Typography>
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
        </Grid>
      </Grid>
    </Box>
  )
}