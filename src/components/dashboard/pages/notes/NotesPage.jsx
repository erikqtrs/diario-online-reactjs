import React from 'react'
import { NotesEntries } from './NotesEntries'

export const NotesPage = () => {
    return (
        <main className="main__page">
            <h1 className="notes__header">My Notes</h1>
            <NotesEntries />
        </main>
    )
}
