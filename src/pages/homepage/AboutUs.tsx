import { Box, Typography } from "@mui/material";
import React from "react";

export default function AboutUs() {
  return (
    <Box margin='5% 15%'>
      <Typography style={{ fontSize: '24px' }}>About us</Typography>
      <br />
      <Typography marginBottom='10px'>
        <span style={{ fontWeight: 'bold' }}>2016- </span>
        <span>Rounx is founded.</span>
      </Typography>

      <Typography marginBottom='10px'>
        <span style={{ fontWeight: 'bold' }}>2020- </span>
        <span>We have completed the infrastructure of Rounx</span>
      </Typography>
      <Typography marginBottom='10px'>
        <span style={{ fontWeight: 'bold' }}>2021- </span>
        <span>rounx.com domain name is officially registered.</span>
      </Typography>
      <Typography marginBottom='10px'>
        <span style={{ fontWeight: 'bold' }}>2022- </span>
        <span>Rounx 1.0 is born and released to the world.</span>
      </Typography>
    </Box>
  )
}