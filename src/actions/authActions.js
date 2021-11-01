import Swal from 'sweetalert2'

import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { FileUploading } from '../helpers/fileUpload'
import { types } from '../types/types'

//Asynchronus Tasks
export const RegisterNewUser = (email, password, name, lastname) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ( {user} ) => {
                await user.updateProfile( {
                    displayName: `${name} ${lastname}`,
                    photoURL: ''
                } )
                
                dispatch( LoginAction( user.uid, user.displayName ) )
            } )
            .catch( err => {
                Swal.fire('Error', err.messange, 'error')
            } )

            
    }
}

export const LoginWithEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( async ({user}) => {
               dispatch( LoginAction( user.uid, user.displayName, user.photoURL ) )
            } )
            .catch( err => {
                Swal.fire('Error', err.messange, 'error')
            } )
    }
}

export const LoginWithGoogle = () => {
    return (dispath) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
                dispath( LoginAction( user.uid, user.displayName ) )
            } )
            .catch( err => {
                Swal.fire('Error', err.messange, 'error')
            } )
    }
}

export const LogOutApp = () => {
    return ( async (dispatch) => {
        await firebase.auth().signOut();
        dispatch( LogoutAction() );
    })
}

export const DeletingUser = (user) => {
    return( dispatch ) => {

        user.delete()
            .then( () => {
                console.log("usuario elimnado")
                dispatch( DeleteUser() )
                dispatch( LogoutAction() )
            } )
            .catch( err => console.log(err) )

    }
}



//Synchronus Actions
export const LoginAction = ( uid, displayName, photoURL='' ) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            photoURL
        }
    }
}

const LogoutAction = () => {
    return{
        type: types.logout
    }
}

const DeleteUser = () => {
    return {
        type: types.deleteUser
    }
}