import React from "react";
import { Box, Grid } from "@mui/material";
import SettingsList from "../../components/settings/SettingsList";
import Personal from "../../components/settings/Personal";

export default function PersonalInfo() {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box style={{ margin: '5% 15%' }}>
            <Grid container>
                <Grid item xs={0} lg={2}>
                    <SettingsList />
                </Grid>
                <Grid item xs={0} lg={1}></Grid>
                <Grid item xs={12} lg={9}>
                    <Personal />
                </Grid>
            </Grid>
        </Box>
    );
}
