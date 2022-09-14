import React from "react";
import { BottomNavigation, Paper, BottomNavigationAction, Select, MenuItem, Box, Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import { TextButton } from "../commonStyle/CommonStyle";
import { useNavigate } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    return (<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '50px', display: 'flex', justifyContent: 'space-between' }} elevation={3}>

        <Box sx={{ display: 'flex', alignItems: 'center', ml: '15%' }}>
            <LanguageIcon />
            <Select sx={{ ml: 1, mr: 3 }} defaultValue="English" variant="standard">
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Chinese">Chinese</MenuItem>
            </Select>
            <TextButton mr={3} onClick={() => navigate('/privacy')}>Privacy Policy</TextButton>
            <TextButton mr={3} onClick={() => navigate('/terms')}>Terms of Service</TextButton>
            <Typography>@Rounx 2022</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: '15%' }} >
            <TwitterIcon sx={{ mr: 2 }} />
            <LinkedInIcon sx={{ mr: 2 }} />
        </Box>
    </Paper>)

}