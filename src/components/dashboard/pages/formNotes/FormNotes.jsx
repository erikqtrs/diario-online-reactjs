import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ActiveNote, DeletingNote } from '../../../../actions/notesActions'
import { useForm } from '../../../../hooks/useForm'
import { Appbar } from './Appbar'


export const FormNotes = () => {
    
    const history = useHistory()
    const dispatch = useDispatch()
    const {active: note} = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm( note )
    const {title, body, status, id} = formValues;
    
    const activeID = useRef(note.id)
    
    useEffect(() => {
        if ( note.id !== activeID.current ) {
            reset( note )
            activeID.current = note.id
        }
    }, [note, activeID])

    useEffect(() => {
        
        dispatch( ActiveNote( formValues.id, { ...formValues } ) )

    }, [formValues, dispatch])

    const handleDeleteNote = () => {
        dispatch( DeletingNote(id) )
        history.push('/dashboard/notes')
    }

    


    return (
        <div className="main__page">
            <Appbar 
                title={title}
                body={body}
                status={status}
            />
            <form>
                <div className="form__group">
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Enter an awesome title"
                        autoComplete="off"
                        value={ title }
                        onChange={handleInputChange}
                    />
                    <select 
                        name="status"
                        value={ status }
                        onChange={handleInputChange}
                    >
                        <option value="">--Choose your status--</option>
                        <option value="&#128512;">&#128512; Happy</option>
                        <option value="&#128542;">&#128542; Sad</option>
                        <option value="&#128545;">&#128545; Angry</option>
                        <option value="&#128553;">&#128553; Tired</option>
                        <option value="&#128559;">&#128559; Surprised</option>
                        <option value="&#128564;">&#128564; Sleepy</option>
                        <option value="&#128523;;">&#128523; Delicious</option>
                        <option value="&#128525;">&#128525; In love</option>
                        <option value="&#128218;">&#128218; Smart</option>
                    </select>
                </div>
                <div className="form__group">
                    <textarea 
                        name="body"  
                        cols="30" 
                        rows="20"
                        placeholder="Write your description"
                        value={ body }
                        onChange={handleInputChange}
                    >
                
                    </textarea>
                </div>
            </form>
            <div className="note__picture">
                {
                    note.imgNote !== ''
                        && (
                            <img 
                                src={note.imgNote}
                                alt="Note figure"
                            />
                        )
                }
                
            </div>
            <div className="delete">
                {
                    id !== ''
                        && (
                            <button
                                onClick={ handleDeleteNote }
                                className="btn__delete"
                            >
                                Delete Note
                            </button>
                        )
                       
                }
                
            </div>
        </div >
    )
}
