import { AuthForm } from '../components/AuthForm';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/authThunk';

import { signInWithGoogle } from '../../firebase/providers';

import { Form, Formik } from 'formik';
import { Link as RouterLink } from "react-router-dom";
import * as Yup from 'yup';

import { AuthLayout } from '../layout/AuthLayout';
import { Alert, Box, Button, Grid2, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import { useMemo, useState } from 'react';
import { login, logout } from '../../store/auth/authSlice';

const LoginPage = () => {
    const auth = useSelector( ( state: RootState ) => state.auth );
    const dispatch = useDispatch<AppDispatch>();

    const [ isAlert, setIsAlert ] = useState( false );
    const isAuthenticated = useMemo(() => auth.status === 'authenticated', [ auth.status ]);

    const onGoogleSignIn = async() => {
        dispatch( startGoogleSignIn() );
        const response = await signInWithGoogle();

        if( response.isAuth ){
            dispatch( login( response ) )
        }
        else{
            dispatch( logout( response.errorMessage ) );
            setIsAlert( true );
            setTimeout(() => { setIsAlert( false ) }, 2500);
        };
    };

    const AlertViews = () => {
        return (
            <Alert variant="outlined" severity="error">
                No fue posible iniciar sesión
            </Alert>
        )
    };

    return (
        <AuthLayout title='Login'>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={( values ) => {
                    dispatch( checkingAuthentication() );
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
                                disabled={ isAuthenticated }
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
                                disabled={ isAuthenticated }
                                onClick={ onGoogleSignIn }
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

            {
                ( isAlert ) && <AlertViews />
            }
        </AuthLayout>
    )
}

export default LoginPage;