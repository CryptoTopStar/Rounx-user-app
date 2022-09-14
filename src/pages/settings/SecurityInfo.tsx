import React from "react";
import { Box, Grid } from "@mui/material";
import SettingsList from "../../components/settings/SettingsList";
import Security from "../../components/settings/Security";

export default function SecurityInfo() {

    return (
        <Box style={{ margin: '5% 15%' }}>
            <Grid container>
                <Grid item xs={0} lg={2}>
                    <SettingsList />
                </Grid>
                <Grid item xs={0} lg={1}></Grid>
                <Grid item xs={12} lg={9}>
                    <Security />
                </Grid>
            </Grid>
        </Box>
    );
}
