import * as React from 'react';
import PropTypes from 'prop-types';
import Home from './screen/Home';
import CV from './screen/cv';
import Blog from './screen/blog';
import Services from './screen/services';
import MyInfo from './screen/myinfo';
import Layout from './components/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MyInfo from "./pages/MyInfo";
// import Home from "./pages/Home";
// import Blog from "./pages/Blog";
// import CV from "./pages/CV";
// import Services from "./pages/Services";

function ResponsiveDrawer(props) {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/cv' element={<CV/>}/>
        <Route path='/myinfo' element={<MyInfo/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blog' element={<Blog/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
   
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
