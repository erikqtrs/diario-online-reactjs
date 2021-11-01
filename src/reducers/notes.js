import { types } from "../types/types";

/*  {
        notes: [],
        active: null
        active: {
            id: ldkfjd145,
            title: '',
            body: '',
            imgNote: '',
            date: new datte().getTime()
        }
    }
*/
const initialState = {
    notes: [],
    active: {
        id: '',
        title: '',
        body: '',
        status: '',
        imgNote: '',
        date: new Date().getTime()
    }
}

export const NotesReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case types.addNewNote:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            };
        case types.activeNote:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.loadNotes:
            return{
                ...state,
                notes: [...action.payload]
            };  
        case types.cleanFormNote:
            return {
                ...state,
                active: {
                    id: '',
                    title: '',
                    body: '',
                    imgNote: '',
                    status: '',
                    date: new Date().getTime()
                },
            }     
        case types.updateNote:
            return {
                ...state,
                notes: state.notes.map( note => 
                    note.id === action.payload.id 
                    ?
                        action.payload.note
                    :
                        note    
                )
            }
        case types.deleteNote:
            return {
                ...state,
                active: {
                    id: '',
                    title: '',
                    body: '',
                    status: '',
                    imgNote: '',
                    date: new Date().getTime()
                },
                notes: state.notes.filter( note => note.id !== action.payload )
            };  
        
        case types.cleanNotesLogout:
            return {
                ...state,
                active: {
                    id: '',
                    title: '',
                    body: '',
                    imgNote: '',
                    status: '',
                    date: new Date().getTime()
                },
                notes: []
            };
        default:
            return state;
    }
}