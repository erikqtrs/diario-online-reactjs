import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { CreateNewNote, UpdateNote, UploadingPicture } from '../../../../actions/notesActions'
import { useHistory } from 'react-router-dom'

export const Appbar = ({title, body, status}) => {

    const dispatch = useDispatch()
    let {active:note} = useSelector(state => state.notes)
    const history = useHistory();

    const handleSaveNote = () => {
        if ( note.id !== '' ) {
            dispatch( UpdateNote(note) )
            note.id = ''
            note.title = ''
            note.body = ''
            note.imgNote = ''
            note.status = ''
        }else  { 
            dispatch( CreateNewNote(title, body, status) )
        }
        
        history.push('/dashboard/notes');
        
    }

    const hnadleSelectPicture = () => {
        document.querySelector('#selectFile').click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        dispatch( UploadingPicture( file ) )
    }

    
    return (
        <div className="appbar">
            <div className="appbar__area-left">
                <p className="appbar__area-date">
                    { moment().format('MMMM Do YYYY') }
                </p>
            </div>
            <div className="appbar__area-right">
                <input 
                    type="file"
                    name="file"
                    id="selectFile"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
                {
                    note.id !== ''
                        && (
                            <button
                                onClick={ hnadleSelectPicture }
                                className="btn__appbar"
                                
                            >
                                Add Picture
                            </button>
                        )
                }
                
                <button
                    onClick={ handleSaveNote }
                    className="btn__appbar"
                >
                    Save Note
                </button>
            </div>
        </div>
    )
}
