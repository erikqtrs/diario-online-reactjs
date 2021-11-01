import React from 'react'
import { useSelector } from 'react-redux'
import { NotesEntry } from './NotesEntry'

export const NotesEntries = () => {
    const {notes} = useSelector(state => state.notes)
    
    return (
        <div className="notes__entries">
            {
                notes.map( note=> (
                    <NotesEntry 
                        key={note.id}
                        {...note}
                    />
                ) )
            }
        </div>
    )
}
