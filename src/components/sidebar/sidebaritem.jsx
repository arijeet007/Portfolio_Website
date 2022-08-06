import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import {Link} from "react-router-dom";

function SidebarItem(props){

    return (
        <Link to={props.link} style={{textDecoration:'none'}}>
    <ListItem button  key={props.keyms}>
        <ListItemIcon>
                    {props.icon}
        </ListItemIcon>
        <ListItemText style={{color:'gray'}}  primary= {props.title}/>    
</ListItem>
</Link>
    )
}

export default SidebarItem;
