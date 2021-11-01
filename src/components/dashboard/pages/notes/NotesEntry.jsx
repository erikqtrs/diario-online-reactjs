import moment from 'moment'
import React from 'react'
import { useDispatch, } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ActiveNote } from '../../../../actions/notesActions';


export const NotesEntry = ({id, body, title, status, date, imgNote}) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleClickActive = () => {

        dispatch( ActiveNote( id, {
            title, body, status, date, imgNote
        } ) )

        history.push('/dashboard/newNote');    

    }

    return (
        <div 
            className="note__entry"
            onClick={handleClickActive}
        >
            <div 
                className="note__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${imgNote})`,
                    
                }}
            >
            </div>

            <div className="note__entry-body">
                <h4 className="note__entry-title"> {title} <span className="status">{status}</span> </h4>
                <p className="note__entry-description">
                    {body}
                </p>
            </div>

            <div className="note__entry-date">
                <span className="note__entry-month"> { noteDate.format('MMM') } </span>
                <span className="note__entry-day"> { noteDate.format('Do') } </span>
            </div>
        </div>
    )
}
