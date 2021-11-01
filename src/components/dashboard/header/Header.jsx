import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { LogOutApp } from '../../../actions/authActions'

export const Header = ({ showSidebar, setShowSidebar }) => {

    const dispatch = useDispatch()
    const handleLogOut = () => {
        console.log("Sali de aqui")
        dispatch( LogOutApp() )
    }
    return (
        <header className="header__dashboard">
            <div 
                onClick={ () => setShowSidebar( !showSidebar ) }
                className="left__area"
            >
                <FaBars className="react__icons-headerNav" />
            </div>
            <div className="center__area">
                <h2> DEGS Journal </h2>
            </div>
            <div className="right__area">
                <button 
                    onClick={handleLogOut}
                    className="btn btn__logout"
                >
                    Log Out
                </button>
            </div>
        </header>
    )
}
