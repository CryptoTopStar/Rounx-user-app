import React from "react";
import { FormControl, Radio, RadioGroup, Box, Typography, TextField, FormGroup, FormControlLabel, Checkbox, InputAdornment } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function FilterConditions() {
  return (
    <Box marginTop='20px'>
      <Box>
        <Typography style={{ marginTop: '30px', fontSize: '20px', marginBottom: '15px' }}>Filter by</Typography>
        <TextField style={{ marginBottom: '10px' }} fullWidth placeholder="Occupational category"></TextField>
        <TextField style={{ marginBottom: '10px' }} fullWidth placeholder="Admin email"></TextField>
        <TextField style={{ marginBottom: '10px' }} fullWidth placeholder="Proposal ID"></TextField>
        <TextField style={{ marginBottom: '10px' }} fullWidth placeholder="Job ID"></TextField>
      </Box>
      <Box>
        <Typography style={{ marginTop: '20px', fontSize: '20px', marginBottom: '15px' }}>Sort by</Typography>
        <FormControl>
          <RadioGroup
            defaultValue="1">
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Comprehensive(Default)"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="High rating priority"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Join early priority"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="Join late priority"
            />
          </RadioGroup>
        </FormControl>

      </Box>
      <Box>
        <Typography style={{ marginTop: '20px', fontSize: '20px', marginBottom: '15px' }}>Online status</Typography>
        <FormControl>
          <RadioGroup
            defaultValue="1">
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="All"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Online"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Offline"
            />
          </RadioGroup>
        </FormControl>

      </Box>
      <Box>
        <Typography style={{ marginTop: '20px', fontSize: '20px', marginBottom: '15px' }}>High rating</Typography>
        <FormControl>
          <RadioGroup
            defaultValue="1">
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Default"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="4.9+"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="4.7+"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="4.5+"
            />
          </RadioGroup>
        </FormControl>

      </Box>

    </Box>
  )
}