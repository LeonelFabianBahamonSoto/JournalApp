import { AuthForm } from '../components/AuthForm';

import { Form, Formik } from 'formik';
import { Link as RouterLink } from "react-router-dom";
import * as Yup from 'yup';

import { AuthLayout } from '../layout/AuthLayout';
import { Box, Button, Grid2, Link } from '@mui/material';
import { Google } from '@mui/icons-material';

const LoginPage = () => {
    return (
        <AuthLayout title='Login'>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={( values ) => {
                    console.info( 'VALUES: ', values );
                }}
                validationSchema={
                    Yup.object({
                        password: Yup.string()
                            .max( 10, 'La contraseña debe contener maximo 10 caracteres' )
                            .min( 5, 'La contraseña debe contener maximo 5 caracteres' )
                            .required('La contraseña es requerida'),
                        email: Yup.string()
                            .email('El email ingresado no es valido')
                            .required('El email es requerido'),
                    })
                }
            >
                <Form>
                    <AuthForm
                        label= 'Email'
                        name= 'email'
                        placeholder= 'Ingrese el correo asociado a su usuario'
                        type= 'email'
                    />

                    <AuthForm
                        label= 'Contraseña'
                        name= 'password'
                        placeholder= 'Ingrese su contraseña'
                        type= 'password'
                    />

                    <Grid2
                        alignItems='center'
                        container
                        justifyContent='center'
                        spacing={ 2 }
                        sx={{ mt: 2 }}
                    >
                        <Grid2
                            size={{ xs: 12, sm: 12, md: 6, lg: 6, }}
                        >
                            <Button
                                type="submit"
                                variant='contained'
                                sx={{
                                    fontSize: '12px',
                                    width: '100%'
                                }}
                            >
                                Login
                            </Button>
                        </Grid2>
                        <Grid2
                            size={{ xs: 12, sm: 12, md: 6, lg: 6, }}
                        >
                            <Button
                                variant='contained'
                                sx={{
                                    fontSize: '12px',
                                    width: '100%'
                                }}
                            >
                                <Google sx={{ mr: 1 }} />
                                Google
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'end',
                            mt: 2,
                            padding: 1,
                        }}
                    >
                        <Link
                            component={ RouterLink }
                            to='/auth/RegisterPage'
                            sx={{
                                fontSize: '18px',
                                fontWeight: '600',
                                textDecoration: 'underline',
                            }}
                        >
                            Registro
                        </Link>
                    </Box>

                </Form>
            </Formik>
        </AuthLayout>
    )
}

export default LoginPage;