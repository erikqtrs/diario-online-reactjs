import React from 'react'
import { FaPalette, FaPlusSquare, FaPortrait, FaRegNewspaper } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const NavbarSide = () => {

    
    return (
        <nav>
            <ul className="nav">
                <li className="nav__item">
                    <NavLink
                        activeClassName="active"
                        className="nav__link"
                        exact
                        to="/dashboard/notes"
                    >
                        <FaRegNewspaper
                            className="react__icons-navbar"
                        />
                        <span>Notes</span>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        activeClassName="active"
                        className="nav__link"
                        exact
                        to="/dashboard/newNote"
                    >
                        <FaPlusSquare
                            className="react__icons-navbar"
                        />
                        <span>New Note</span>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        activeClassName="active"
                        className="nav__link"
                        exact
                        to="/dashboard/themes"
                    >
                        <FaPalette
                            className="react__icons-navbar"
                        />
                        <span>Themes</span>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        activeClassName="active"
                        className="nav__link"
                        exact
                        to="/dashboard/account"
                    >
                        <FaPortrait
                            className="react__icons-navbar"
                        />
                        <span>Account</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
