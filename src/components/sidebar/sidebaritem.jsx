import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

function SidebarItem(props){

    return (<ListItem disablePadding>
    <ListItemButton>
        <ListItemIcon>
            {props.icon}
        </ListItemIcon>
        <ListItemText primary= {props.title}/>
    </ListItemButton>
</ListItem>
    )
}

export default SidebarItem;
