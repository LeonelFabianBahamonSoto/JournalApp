import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const Loading = () => {
    return (
        <LoadingBox>
            <CircularProgress
                size="50px"
                sx={{ color: 'white' }}
            />
        </LoadingBox>
    )
}

const LoadingBox = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
}));

export default Loading;