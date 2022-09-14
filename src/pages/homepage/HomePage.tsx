import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { BlueButton } from "../../commonStyle/CommonStyle";

export default function HomePage() {
  return (
    <Box style={{ margin: '5% 15%' }}>
      <Grid container>
        <Grid alignItems='center' display='flex' item xs={12} md={12} lg={5}>
          <Box>
            <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
              Talent First, Client First
            </Typography>
            <br />
            <Typography style={{ fontSize: '24px', color: '#757575' }}>
              Rounx is a remote work platform for people with professional skills.
              <br />
              <br />
              Clients can hire freelancers all over the world to get the job done, Freelancers can find suitable jobs on ﻿this platform.
            </Typography>
            <br />
            <BlueButton>Join Rounx</BlueButton>
          </Box>
        </Grid>
        <Grid item lg={2} />
        <Grid item lg={5} xs={12} md={12} >
          <img
            width='100%'
            src="tools.png" />
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
      <Box>
        <Typography style={{ fontSize: '40px', fontWeight: 'bold', justifyContent: 'center', display: 'flex', margin: '5%' }}>Why Rounx</Typography>
        <Grid container justifyContent='center'>
          <Grid item md={12} lg={4}>
            <Box marginRight='30px'>
              <img width='70px' src="VerifiedUserIcon.png" />
              <br />
              <br />
              <Typography style={{ fontSize: '24px', fontWeight: 'bold' }}>High quality work</Typography>
              <br />
              <Typography style={{ fontSize: '18px', color: '#757575' }}>Before freelancers join the platform, they go through a rigorous review, and only a few freelancers will pass the review.</Typography>
            </Box>
          </Grid>
          <Grid item md={12} lg={4}>
            <Box marginRight='30px'>
              <img width='70px' src="PublicIcon.png" />
              <br />
              <br />
              <Typography style={{ fontSize: '24px', fontWeight: 'bold' }}>Work-Life Balance</Typography>
              <Typography style={{ fontSize: '18px', color: '#757575' }}>Remote work allows for more flexibility in scheduling, as long as you can complete your work on time, ﻿so you can work as long as you want.</Typography>
              <br />
            </Box>
          </Grid>
          <Grid item md={12} lg={4}>
            <Box marginRight='30px'>
              <img width='70px' src="CodeIcon.png" />
              <br />
              <br />
              <Typography style={{ fontSize: '24px', fontWeight: 'bold' }}>Focus on IT industry</Typography>
              <Typography style={{ fontSize: '18px', color: '#757575' }}>Rounx focuses on the IT industry, occupation categories include: front-end back-end development, ﻿design...etc.</Typography>
              <br />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <br />
      <Grid container>
        <Grid item lg={5} >
          <Box>
            <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>Coming Soon</Typography>
            <br />
            <Typography style={{ fontSize: '24px', color: '#757575' }}>
              Our remote work platform will be online soon,Add your email and become the first Rounx user.
            </Typography>
            <br />
            <Box display='flex' alignItems='center'>
              <TextField fullWidth placeholder="Email" style={{ marginRight: '20px' }}></TextField>
              <BlueButton>Submit</BlueButton>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2}></Grid>
        <Grid item lg={5}>
          <img
            width='50%'
            style={{ zIndex: '1' }}
            src="SamsungGalaxy.png" />
          <img
            width='50%'
            src="GooglePixel.png" />
        </Grid>
      </Grid>
    </Box>
  )

}