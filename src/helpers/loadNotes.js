import { db } from "../firebase/firebaseConfig"

export const GetNotes = async (uid) => {

    const notesSnapshot = await db.collection( `${uid}/journal/notes`).get();
    const notes = [];

    notesSnapshot.forEach( snap => {
        notes.push({
            id: snap.id,
            ...snap.data()
        })
    } )

    return notes

}