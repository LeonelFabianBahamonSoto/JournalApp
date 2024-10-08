import { SaveAltOutlined } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import ImagesGallery from "../components/ImagesGallery";

const NoteView = () => {
    return (
        <>
            <Grid2
                alignItems='center'
                container
                direction='row'
                justifyContent='space-between'
                spacing={ 0 }
                sx={{
                    mb: 1,
                }}
            >
                <Grid2
                >
                    <Typography
                        fontSize={ 39 }
                        fontWeight='light'
                    >
                        6 de Octubre del 2024
                    </Typography>
                </Grid2>

                <Grid2>
                    <Button
                        color="primary"
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <SaveAltOutlined
                            sx={{
                                fontSize: 30,
                                mr: 1,
                            }}
                        />
                        Guardar
                    </Button>
                </Grid2>
            </Grid2>

            <Grid2 container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label='Titulo'
                    sx={{
                        border: 'none',
                        mb: 1,
                    }}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio hoy?"
                    label="¿Que sucedio hoy?"
                    minRows={ 5 }
                    sx={{
                        border: 'none',
                        mb: 1,
                    }}
                />

                <ImagesGallery />
            </Grid2>
        </>
    )
}

export default NoteView;