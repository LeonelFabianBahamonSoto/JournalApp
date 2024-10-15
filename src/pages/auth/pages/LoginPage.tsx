import { useMemo, useState } from 'react';

import { AuthForm } from '../../../components/atoms/Forms/AuthForm';

import { AppDispatch, RootState } from '../../../store/store';
import { checkingAuthentication, startGoogleSignIn, startSignIn } from '../../../store/auth/authThunk';
import { login, logout } from '../../../store/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import { signInWithGoogle } from '../../../firebase/providers';

import { Form, Formik } from 'formik';
import { Link as RouterLink } from "react-router-dom";
import * as Yup from 'yup';

import GridFormButtons from '../../../components/molecules/GridFormButtons';

import { Alert, Box, Button, Link, Theme } from '@mui/material';
import { Google } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import FormContainer from '../../../components/molecules/FormContainer';

export const useStyles = makeStyles(( theme: Theme ) => ({
        buttonStyle: {
            height: '3vh',
            fontSize: '12px',
            width: '100%',
        },
        linkContainer: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'end',
            mt: 2,
            padding: 1,
        },
        linkStyle: {
            fontSize: '18px',
            fontWeight: '600',
            textDecoration: 'underline',
        },
}));

interface AlertViewsProps {
    message: string;
};

const LoginPage = () => {
    const auth = useSelector( ( state: RootState ) => state.auth );
    const dispatch = useDispatch<AppDispatch>();

    const classes = useStyles();

    const [ isAlert, setIsAlert ] = useState( false );
    const [ isErrorMessage, setErrorMessage ] = useState( '' );
    const isAuthenticated = useMemo(() => auth.status === 'authenticated', [ auth.status ]);

    const onGoogleSignIn = async() => {
        dispatch( startGoogleSignIn() );
        const response = await signInWithGoogle();

        if( response.isAuth ){
            dispatch( login( response ) );
        }
        else{
            dispatch( logout( response.errorMessage ) );
            setErrorMessage( 'No fue posible iniciar sesión' );
            setIsAlert( true );
            setTimeout(() => { setIsAlert( false ) }, 2500);
        };
    };

    const AlertViews = ( { message }: AlertViewsProps ) => {
        return (
            <Alert severity="error">
                { message }
            </Alert>
        )
    };

    return (
        <FormContainer
            alignItemsMain='center'
            sizeForm={{ xs: 4, md: 6, lg: 8 }}
            spacingMain={ 0 }
            title='Login'
            titleStyle={{
                fontSize: '25px',
                marginBottom: '2%',
                fontWeight: '600',
            }}
            styleMain={{
                alignItems: 'center',
                display: 'flex',
                backgroundColor: 'primary.main',
                justifyContent: 'center',
                minHeight: '100vh',
            }}
            styleSecond={{
                backgroundColor: 'white',
                borderRadius: 2,
                padding: 3,
                width: '80%',
            }}
        >
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={ async( values ) => {
                    dispatch( checkingAuthentication() );
                    const { isAuth, errorMessage } = await dispatch( startSignIn( values ) );

                    if( isAuth ){
                        console.info(" --------> Redireccion");
                    }
                    else {
                        dispatch( logout( errorMessage ) );
                        setErrorMessage( errorMessage );
                        setIsAlert( true );
                        setTimeout(() => { setIsAlert( false ) }, 2500);
                    }
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

                    <GridFormButtons
                        alignItemsData="center"
                        spacingData={ 2 }
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            mt: 2,
                        }}
                        sizeGrid={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    >
                        <Button
                            className={ classes.buttonStyle }
                            disabled={ isAuthenticated }
                            type="submit"
                            variant='contained'
                            sx={{
                                bgcolor: '#4285f4',
                                color: 'white',
                                fontWeight: '600',
                            }}
                        >
                            Login
                        </Button>

                        <Button
                            className={ classes.buttonStyle }
                            disabled={ isAuthenticated }
                            onClick={ onGoogleSignIn }
                            variant='contained'
                            sx={{
                                bgcolor: '#fbbc05',
                                color: '#ea4335',
                                fontWeight: '600',
                            }}
                        >
                            <Google sx={{ color: '#ea4335', mr: 1 }} />
                            Google
                        </Button>
                    </GridFormButtons>


                    <Box className={ classes.linkContainer } >
                        <Link
                            component={ RouterLink }
                            to='/auth/RegisterPage'
                            className={ classes.linkStyle }
                        >
                            Registro
                        </Link>
                    </Box>

                </Form>
            </Formik>

            {
                ( isAlert ) && <AlertViews message={ isErrorMessage } />
            }
        </FormContainer>
    )
}

export default LoginPage;
