import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

function Blog()
{
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(false);
    },[]);
    return(
        <>
        {loading && <LinearProgress />}
            <div>
                This is my blog page
            </div>
        </>
    );
}
export default Blog;