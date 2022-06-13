import React from 'react';
import { Grid,Box } from '@mui/material';
const Gride = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor="green" p={5} textAlign="center">1</Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor="yellow" p={5} textAlign="center">2</Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor="red" p={5} textAlign="center">3</Box>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box bgcolor="blue" p={5} textAlign="center">4</Box>
                </Grid>
            </Grid>
        </div>
    );
};
export default Gride;




