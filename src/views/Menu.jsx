import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { getItems } from '../services/items';

function Menu() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getItems();
            setItems(data);
        };
        fetchData();
    }, []);

    console.log(items);
    return (
        <Grid container>
            <Grid
                sx={{
                    height: '200px',
                    width: '50%',
                    bgcolor: 'blue',
                }}
            ></Grid>
            <Grid
                sx={{
                    height: '200px',
                    width: '50%',
                    bgcolor: 'red',
                }}
            ></Grid>
            <Grid
                sx={{
                    height: '800px',
                    width: '50%',
                    bgcolor: 'purple',
                }}
            ></Grid>
            <Grid
                sx={{
                    height: '800px',
                    width: '50%',
                    bgcolor: 'green',
                }}
            ></Grid>
            <Grid
                sx={{
                    height: '100px',
                    width: '100%',
                    bgcolor: 'blue',
                }}
            ></Grid>
            <Grid
                sx={{
                    height: '500px',
                    width: '50%',
                    bgcolor: 'yellow',
                }}
            ></Grid>
            <Grid
                sx={{
                    height: '500px',
                    width: '50%',
                    bgcolor: 'orange',
                }}
            ></Grid>
            <Grid
                sx={{
                    height: '600px',
                    width: '50%',
                    bgcolor: 'blue',
                }}
            ></Grid>
            <Grid
                sx={{
                    height: '600px',
                    width: '50%',
                    bgcolor: 'red',
                }}
            ></Grid>
            <Grid
                sx={{
                    height: '400px',
                    width: '50%',
                    bgcolor: 'yellow',
                }}
            ></Grid>
            <Grid
                sx={{
                    height: '400px',
                    width: '50%',
                    bgcolor: 'black',
                }}
            ></Grid>
        </Grid>
    );
}

export default Menu;
