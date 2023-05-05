import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function Main() {
    return (
        <>
            <Grid
                sx={{ m: '0em 1em' }}
                container
                spacing={{ xs: 0, sm: 1, md: 5 }}
            >
                <Grid xs={12} md={4}>
                    <Box>
                        <Typography
                            component="h1"
                            sx={{
                                textAlign: 'center',
                                fontFamily: 'Montserrat',
                                fontWeight: '500',
                                fontSize: '2em',
                                letterSpacing: '7px',
                                m: '1em',
                            }}
                        >
                            Today's Special
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'left',
                                fontFamily: 'Montserrat',
                                // fontWeight: 'bold',
                                fontSize: '1em',
                                m: '1em',
                            }}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Tempora vel laudantium atque minus,
                            necessitatibus nobis! Error, debitis harum. Nam nisi
                            totam minima ullam error! Maiores laboriosam nostrum
                            ullam blanditiis deleniti?
                        </Typography>
                        <Typography
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                fontFamily: 'Montserrat',
                                fontWeight: '500',
                            }}
                        >
                            $15.00
                        </Typography>
                    </Box>
                    <Box
                        component="img"
                        alt="example food photo"
                        sx={{ width: '100%' }}
                        src={'/foodexample.png'}
                    ></Box>
                </Grid>

                <Grid xs={12} md={8}>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: { xl: '90', sm: 'auto' },
                            width: { xs: '100%' },
                        }}
                        src={'/mainStand.png'}
                        alt="placeholder"
                    ></Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Main;
