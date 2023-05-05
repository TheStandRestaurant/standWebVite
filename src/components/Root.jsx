import styled from '@emotion/styled';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Root = () => {
    const location = useLocation();
    const StyledLink = styled(Link)`
        text-decoration: none;
    `;
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    height: '100px',
                    width: '100%',
                    // bgcolor: 'black',
                }}
            >
                <Avatar
                    sx={{
                        m: '5px 15px',
                        position: 'absolute',
                        left: '0',
                        height: '90px',
                        width: '90px',
                        '& .MuiAvatar-img': { height: '100%', width: '100%' },
                    }}
                    alt="stand mini logo"
                    src="/stand.png"
                />
                {location.pathname === '/' ? (
                    <Typography sx={{ m: '50px 15px' }}>
                        <StyledLink to="/menu">Menu</StyledLink>
                    </Typography>
                ) : (
                    <Typography sx={{ m: '50px 15px' }}>
                        <StyledLink to="/">Home</StyledLink>
                    </Typography>
                )}
                <Typography sx={{ m: '50px 15px' }}>
                    <StyledLink to="/contact">Contact</StyledLink>
                </Typography>
                <Typography sx={{ m: '50px 15px' }}>
                    <StyledLink to="/catering">Catering</StyledLink>
                </Typography>
                <Typography sx={{ m: '50px 15px' }}>
                    <StyledLink to="/merch">Merch</StyledLink>
                </Typography>
            </Box>
            <Divider />

            <Box sx={{ height: '90vh' }}>
                <Outlet />
            </Box>
        </>
    );
};

export default Root;
