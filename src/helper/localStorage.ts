import { getAuth } from "firebase/auth";

interface User {
    displayName: string,
    email: string,
    photoURL: string,
    uid: string,
};

const saveNewAuth = ( user: User ) => {
    const { displayName, email, photoURL, uid } = user;
    sessionStorage.setItem( 'userAuth', JSON.stringify({ displayName, email, photoURL, uid }));
};

const getUserAuth = () => {
    try {
        const auth = getAuth();

        if( auth.currentUser ){
            const { displayName, email, photoURL, uid } = auth.currentUser;
            return { displayName, email, photoURL, uid };
        }
        else{
            sessionStorage.clear();
            return false;
        }
    } catch (error) {
        return false;
    }

};

export {
    getUserAuth,
    saveNewAuth,
};