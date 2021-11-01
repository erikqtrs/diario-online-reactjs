import Swal from 'sweetalert2'

import { db } from "../firebase/firebaseConfig";
import { FileUploading } from "../helpers/fileUpload";
import { GetNotes } from "../helpers/loadNotes";
import { types } from "../types/types";


export const CreateNewNote = ( title, body, status ) => {
    return ( async (dispatch, getState) => {

        let {uid} = getState().auth;
        
        const newNote = {
            title,
            body,
            status,
            imgNote: '',
            date: new Date().getTime()
        }

        try{

            const docRef = await db.collection(`${uid}/journal/notes`).add(newNote)
            dispatch( ActiveNote( docRef.id, newNote ) )
            dispatch(  AddNewNote( docRef.id, newNote ) )
            dispatch( CleanFormNote() )
            Swal.fire('Saved', newNote.title, 'success')
        }catch(err) {
            Swal.fire('Error', err.messange, 'error')
        }

    } ) 

}

export const LoadingNotes = (uid) => {
    return async (dispatch) => {

        const notes = await GetNotes(uid);
        dispatch( loadNotes(notes) );

    }
}

export const UpdateNote = (note) => {
    return async ( dispatch, getState ) => {

        let {uid} = getState().auth;

        if ( !note.imgNote ) {
            delete note.imgNote
        }

        const updatedNote = {...note};
        delete updatedNote.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update( updatedNote )
        dispatch( RefreshNote( note.id, updatedNote ) )
        Swal.fire('Note Updated', updatedNote.title, 'success')
    }
}

export const DeletingNote = (id) => {
    return async (dispatch, getState) => {
        
        let {uid} = getState().auth;
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch( DeleteNote(id) )

    }
}


export const UploadingPicture = (file) => {
    return async (dispatch, getState) => {

        const { active: note } = getState().notes;
       
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await FileUploading(file);
        note.imgNote = fileUrl;

        dispatch( UpdateNote(note) )

        Swal.close();

    }
}




//Synchronus Actions
export const ActiveNote = ( id, note ) => ({
    type: types.activeNote,
    payload: {
        id,
        ...note
    }
});

export const AddNewNote = (id, note) => {
    return {
        type: types.addNewNote,
        payload: {
            id,
            ...note
        }
    }
}

const CleanFormNote = () => {
    return {
        type: types.cleanFormNote
    }
}

const loadNotes = (notes) => {
    return {
        type: types.loadNotes,
        payload: notes
    }
}

const RefreshNote = (id, note) => {
    return {
        type: types.updateNote,
        payload: {
            id,
            note: {
                id,
                ...note
            }
        }
    }
}

const DeleteNote = (id) => {
    return {
        type: types.deleteNote,
        payload: id
    }
}

export const cleanNotes = () => {
    return {
        type: types.cleanNotesLogout
    }
}
