import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import { useNavigate } from 'react-router-dom';
export default function SettingsList() {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const infoClick = (index: number, url: string) => {
        setSelectedIndex(index);
        navigate(`${url}`);
    }
    return (
        <List sx={{ width: '100%' }}>
            <Typography fontSize='24px' variant='h6' mb={3}> Settings </Typography>
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => infoClick(0, '/settings/personal')} >
                <PersonIcon />
                <ListItemText style={{ paddingLeft: '10px' }} primary={'Persional Info'} />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 1}
                onClick={() => infoClick(1, '/settings/security')}>
                <ListItemText style={{ paddingLeft: '10px' }} primary={'Security'} />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 2}
                onClick={() => infoClick(2, '/settings/currency')}>
                <PaidIcon />
                <ListItemText style={{ paddingLeft: '10px' }} primary={'Currency'} />
            </ListItemButton>
        </List>
    );
}
