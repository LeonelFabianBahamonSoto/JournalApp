import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { logout } from "../store/auth/authSlice";

const dispatch = useDispatch<AppDispatch>();

const authStateChanged = ( user: any ) => {
    onAuthStateChanged( FirebaseAuth, async( user ) => {
        if( user ){
            dispatch( logout( 'Sesion cerrada' ) );
        }
        else{
            dispatch( logout( 'Sesion cerrada' ) );
        }
    });
};

export {
    authStateChanged,
};