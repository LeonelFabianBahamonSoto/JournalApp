import { Grid2, Typography } from "@mui/material";

export const AuthLayout = ({ children, title }: any) => {
    return (
        <Grid2
            alignItems='center'
            container
            direction='column'
            justifyContent='center'
            spacing={ 0 }
            sx={{
                backgroundColor: 'primary.main',
                minHeight: '100vh',
            }}
        >
            <Grid2
                className='box-shadow'
                size={{ xs: 4, md: 6, lg: 8 }}
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 2,
                    padding: 3,
                    width: '80%',
                }}
            >
                <Typography
                    variant='h5'
                    sx={{
                        mb: 3
                    }}
                >
                    { title }
                </Typography>

                { children }

            </Grid2>
        </Grid2>
    )
}
