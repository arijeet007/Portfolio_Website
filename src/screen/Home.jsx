import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import {Link} from "react-router-dom";
function Home(){
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(false);
    },[]);

    return(
        <>
        {loading && <LinearProgress />}
        <div style={{height:'100vh', backgroundImage:`URL('https://us.123rf.com/450wm/peshkova/peshkova1912/peshkova191213132/135761600-empty-spot-on-white-table-full-of-office-tools-mock-up-3d-rendering.jpg?ver=6')`,

    
    }}>
        <div style={{backdropFilter:`blur(5px)`, display:'flex',backgroundColor:'rgba(255,255,255,0.4)'}}>
        <div style={{flex:1, }}>
        <div className="info" style={{fontSize:'3rem',fontFamily:'sans-serif',fontWeight:'500', }}>Hi I am Arijeet Dasgupta</div>
    <h2 style={{fontSize:'2rem',fontFamily:'monospace',fontWeight:'300', }}>Front End Web developer</h2>
    <div className="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nobis officiis consequuntur recusandae. Delectus molestias dolore eum doloremque sit quasi, suscipit rem impedit similique facilis itaque, quam, neque hic architecto.</div>
    <br></br>
    <Stack direction="row" spacing={2}>
    <Link to="/cv" style={{textDecoration:'none'}}><Button variant="contained"  startIcon={<DownloadIcon/>}>Download My CV</Button></Link>
    <Button variant="contained" startIcon={<ContactPhoneIcon/>}>Contact Me</Button>
        </Stack>
        </div>
        <div style={{flex:1, justifyContent:'center', alignItems:'center', display:'flex'}}><Avatar alt="Image" 
         src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
         sx={{ width: 300, height: 300 }}
         /></div>
         </div>
         </div>
        </>

    )
}
export default  Home;
