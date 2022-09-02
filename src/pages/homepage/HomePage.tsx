import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { BlueButton } from "../../commonStyle/CommonStyle";

export default function HomePage() {
  return (
    <Box style={{ margin: '5% 15%' }}>
      <Box>
        <Box>
          <Typography>
            Talent First, Client First
          </Typography>
          <Typography>
            Rounx is a remote work platform for people with professional skills. Clients can hire freelancers all over the world to get the job done, Freelancers can find suitable jobs on ﻿this platform.
          </Typography>
          <BlueButton>Join Rounx</BlueButton>
        </Box>
        <Box>
          <img
            src="tools.png" />
        </Box>
      </Box>
      <Box>
        <Typography>Why Rounx</Typography>
        <Box style={{ display: 'flex' }}>
          <Box marginRight='30px'>
            <img src="VerifiedUserIcon.png" />
            <Typography>High quality work</Typography>
            <Typography>Before freelancers join the platform, they go through a rigorous review, and only a few freelancers will pass the review.</Typography>
          </Box>
          <Box>
            <img src="PublicIcon.png" />
            <Typography>Work-Life Balance</Typography>
            <Typography>Remote work allows for more flexibility in scheduling, as long as you can complete your work on time, ﻿so you can work as long as you want.</Typography>
          </Box>
          <Box>
            <img src="CodeIcon.png" />
            <Typography>Focus on IT industry</Typography>
            <Typography>Rounx focuses on the IT industry, occupation categories include: front-end back-end development, ﻿design...etc.</Typography>
          </Box>
        </Box>
      </Box>
      <Box display='flex'>
        <Box>
          <Typography>Coming Soon</Typography>
          <Typography>

          </Typography>
          <Box>
            <TextField fullWidth placeholder="Email"></TextField>
            <BlueButton>Submit</BlueButton>
          </Box>
        </Box>
        <Box>
          <img
            src="SamsungGalaxy.png" />
          <img
            src="GooglePixel.png" />
        </Box>
      </Box>
    </Box>
  )

}