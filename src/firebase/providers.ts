import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleAuthProvider = new GoogleAuthProvider();

interface RegisterData {
    displayName?: string,
    email: string,
    password: string,
};

const signInWithCredentials = async( { email, password }: RegisterData ) => {
    try {
        const result: any = await signInWithEmailAndPassword( FirebaseAuth, email, password );

        if( result.user ){
            return {
                isAuth: true,
                data: result.user,
            };
        } else return { isAuth: false, errorMessage: result.errorMessage ? result.errorMessage : 'No fue posible el inicio de sesion' };

    } catch (error) {
        return { isAuth: false, errorMessage: 'Hubo un error en el inicio de sesion' };
    }
};

const signInWithGoogle = async() => {
    try {
        const result: any = await signInWithPopup( FirebaseAuth, googleAuthProvider );
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        if( result.user ){
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

const registerUser = async( { email, password, displayName }: RegisterData ) => {
    try {
        const response = await createUserWithEmailAndPassword( FirebaseAuth, email, password );

        // const auth = getAuth();
        // const currentUserSystem = FirebaseAuth.currentUser;

        if( response.operationType !== "signIn" ) {
            return { isAuth: false, errorMessage: 'Hubo un error en el registro del usuario' };
        };

        return { isAuth: true, data: response };
        // updateProfile( auth.user.currentUser, displayName );
    } catch (error) {
        return { isAuth: false, errorMessage: error };
    };
};

export {
    signInWithGoogle,
    registerUser,
    signInWithCredentials,
};