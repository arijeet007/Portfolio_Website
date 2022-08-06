import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

function Services()
{
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(false);
    },[]);
    return(
        <>
        {loading && <LinearProgress />}
            <div>
                This is my Servicesa page
            </div>
        </>
    );
}
export default Services;