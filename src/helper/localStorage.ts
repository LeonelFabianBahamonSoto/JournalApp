interface User {
    displayName: string,
    email: string,
    photoURL: string,
    uid: string,
};

const saveNewAuth = ( user: User ) => {
    const { displayName, email, photoURL, uid } = user;
    sessionStorage.setItem( 'userAuth', JSON.stringify({
        displayName: displayName,
        email: email,
        photoURL: photoURL,
        uid: uid,
    }));
};

const getUserAuth = () => {
    const user = sessionStorage.getItem( 'userAuth' );

    if( user ){
        return user;
    }
    else {
        return 'not-authenticated';
    }
};

export {
    getUserAuth,
    saveNewAuth,
};