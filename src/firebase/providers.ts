import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';
import { ErrorMessage } from 'formik';

const googleAuthProvider = new GoogleAuthProvider();

const signInWithGoogle = async() => {
    try {
        const result: any = await signInWithPopup( FirebaseAuth, googleAuthProvider );
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        if( result.user ){
            console.info( 'isOK? ', email  );
            return {
                isAuth: true,
                displayName,
                email,
                photoURL,
                uid,
            };
        } else return { isAuth: false, errorMessage: result.errorMessage ? result.errorMessage : 'Cancelo el inicio de sesion' };

    } catch (error) {
        return { isAuth: false, errorMessage: 'Hubo un error en el inicio de sesion' };
    }
};

export {
    signInWithGoogle,
};