import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
    const StyledLink = styled(Link)`
        text-decoration: none;
    `;
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    width: '100',
                    justifyContent: 'space-between',
                }}
            >
                <StyledLink to="/">Home</StyledLink>

                <StyledLink to="/contact">Contact</StyledLink>
            </Box>

            <Box>
                <Outlet />
            </Box>
        </>
    );
};

export default Root;
