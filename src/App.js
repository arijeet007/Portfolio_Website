import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Sidebar from './components/sidebar/sidebar';
import Home from './screen/Home';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar/>
      
      <Box
        component="main"
        sx={{ flexGrow: 1,  width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        
      >
        <Toolbar />
        <Home/>

      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
