import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

function CV()
{
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(false);
    },[]);
    return(
        <>
        {loading && <LinearProgress />}
            <div>
                This is my CVa page
            </div>
        </>
    );
}
export default CV;