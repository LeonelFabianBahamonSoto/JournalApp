import { AuthForm } from '../components/AuthForm';

import { Form, Formik } from 'formik';
import { Link as RouterLink } from "react-router-dom";
import * as Yup from 'yup';

import { AuthLayout } from '../layout/AuthLayout';
import { Box, Button, Grid2, Link } from '@mui/material';
// import { Google } from '@mui/icons-material';

const RegisterPage = () => {
    return (
        <AuthLayout title='Register'>
            <Formik
                initialValues={{
                    password: '',
                    userName: '',
                }}
                onSubmit={( values ) => {
                    console.info( 'VALUES: ', values );
                }}
                validationSchema={
                    Yup.object({
                        password: Yup.string()
                            .max( 10, 'La contraseña debe contener maximo 10 caracteres' )
                            // .min( 5, 'La contraseña debe contener maximo 5 caracteres' )
                            .required('La contraseña es requerida'),
                        email: Yup.string()
                            .email('El email ingresado no es valido')
                            .required('El email es requerido'),
                        name: Yup.string()
                            .max( 10, 'El nombre debe contener maximo 10 caracteres' )
                            // .min( 5, 'El nombre debe contener maximo 5 caracteres' )
                            .required('El nombre es requerido'),
                    })
                }
            >
                <Form>
                    <AuthForm
                        component= 'span'
                        label= 'Nombre completo'
                        name= 'name'
                        placeholder= 'Ingrese su nombre completo'
                        type= 'text'
                    />

                    <AuthForm
                        component= 'span'
                        label= 'Email'
                        name= 'email'
                        placeholder= 'Ingrese su correo'
                        type= 'email'
                    />

                    <AuthForm
                        component= 'span'
                        label= 'Contraseña'
                        name= 'password'
                        placeholder= 'Ingrese su contraseña'
                        type= 'password'
                    />

                    <Grid2
                        alignItems='center'
                        container
                        justifyContent='center'
                        sx={{ mt: 2 }}
                    >
                        <Grid2
                            size={{ xs: 12 }}
                        >
                            <Button
                                type="submit"
                                variant='contained'
                                sx={{
                                    fontSize: '15px',
                                    width: '100%'
                                }}
                            >
                                Crear cuenta
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
                            to='/auth/Login'
                            sx={{
                                fontSize: '18px',
                                fontWeight: '600',
                            }}
                        >
                            ¿Ya tienes cuenta? Ingresar
                        </Link>
                    </Box>

                </Form>
            </Formik>
        </AuthLayout>
    )
}

export default RegisterPage;