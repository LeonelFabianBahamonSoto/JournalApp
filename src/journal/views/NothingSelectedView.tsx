import { StarBorder } from '@mui/icons-material';
import { Grid2, Typography } from '@mui/material';

const NothingSelectedView = () => {
    return (
        <div>
            <Grid2
                alignItems='center'
                container
                direction='column'
                justifyContent='center'
                spacing={ 0 }
                sx={{
                    bgcolor: 'primary.main',
                    minHeight: 'calc(100vh - 100px)',
                    borderRadius: 3,
                }}
            >
                <Grid2
                    size={ 3 }
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <StarBorder
                        sx={{
                            color: 'white',
                            fontSize: 100,
                        }}
                    />
                </Grid2>

                <Grid2
                    size={ 3 }
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            color: 'white',
                        }}
                    >
                        Selecciona o crea una nota
                    </Typography>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default NothingSelectedView;