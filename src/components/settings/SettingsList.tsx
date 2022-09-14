import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
export default function SettingsList() {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const infoClick = (index: number, url: string) => {
        setSelectedIndex(index);
    }
    return (
        <List sx={{ width: '100%' }}>
            <Typography fontSize='24px' variant='h6' mt={3} ml={3} mb={1}> Settings </Typography>
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => infoClick(0, '/settings/personal')} >
                <PersonIcon />
                <ListItemText style={{ paddingLeft: '10px' }} id={'labelId'} className='list-active' primary={'Persional Info'} />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 1}
                onClick={() => infoClick(1, '/settings/security')}>
                <ListItemText style={{ paddingLeft: '10px' }} id={'labelId'} primary={'Security'} />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 2}
                onClick={() => infoClick(2, '/settings/currency')}>
                <PaidIcon />
                <ListItemText style={{ paddingLeft: '10px' }} id={'labelId'} primary={'Currency'} />
            </ListItemButton>
        </List>
    );
}
