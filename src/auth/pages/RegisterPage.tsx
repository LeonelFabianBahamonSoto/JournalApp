import { useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';

import { AuthForm } from '../components/AuthForm';
import { AuthLayout } from '../layout/AuthLayout';
import { startCreateNewUser } from '../../store/auth/authThunk';

import { Form, Formik } from 'formik';
import { Link as RouterLink } from "react-router-dom";
import * as Yup from 'yup';

import { Box, Button, Grid2, Link } from '@mui/material';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

interface RegisterData {
    displayName: string,
    email: string,
    password: string,
};

const RegisterPage = () => {
    const { status } = useSelector(( state: RootState ) => state.auth );
    const dispatch = useDispatch<AppDispatch>();

    const MySwal = withReactContent(Swal);

    const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ] );

    return (
        <AuthLayout title='Register'>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    displayName: '',
                }}
                onSubmit={ async( values: RegisterData ) => {
                    const { isAuth, errorMessage } = await dispatch( startCreateNewUser( values ) );

                    if( isAuth ){
                        MySwal.fire({
                            confirmButtonText: 'Cerrar',
                            icon: 'success',
                            title: 'Usuario creado con exito',
                        }).then((result) => {
                            if ( result.isConfirmed ) {
                                console.info(" --------> Redireccion");
                            } else if ( result.isDenied ) {
                                console.info("Changes are not saved", "", "info");
                            }
                        });
                    }
                    else {
                        MySwal.fire({
                            title: 'Error con la creación del cliente',
                            text: `${errorMessage}`,
                            icon: 'error',
                            confirmButtonText: 'Cerrar'
                        })
                    }
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
                        displayName: Yup.string()
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
                        name= 'displayName'
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
                                disabled={ isCheckingAuthentication }
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