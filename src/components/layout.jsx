import * as React from 'react';

import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Sidebar from './sidebar/sidebar';
import {Outlet} from "react-router-dom";
const drawerWidth = 240;

function Layout()
{
    return(
        <Box sx={{ display: 'flex' }}>
        <Sidebar/>
        
        <Box
          component="main"
          sx={{ flexGrow: 1,  width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          
        >
          <Toolbar />
          <Outlet />
          
  
  
        </Box>
      </Box>
    );
}
export default Layout;