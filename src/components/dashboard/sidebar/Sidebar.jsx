import React from 'react'
import { FaBookReader } from 'react-icons/fa'
import { Footer } from './Footer'
import { NavbarSide } from './NavbarSide'
import { firebase } from '../../../firebase/firebaseConfig'
export const Sidebar = ({ showSidebar }) => {

    const user = firebase.auth().currentUser;
    return (
        <aside className={ showSidebar ? 'aside__main-active' : 'aside__main-desactive' }>
            <div className="profile__area">
                <div className="profile__area-img">
                    <FaBookReader 
                        className="profile__img"
                    />
                </div>
                <div className="profile__area-text">
                    <p className="profile__displayName"> {user.displayName} </p>
                    <p className="profile__email"> {user.email} </p>
                </div>
            </div>
            <hr/>
            <div className="nav__area">
                <NavbarSide />
            </div>
            <div className="footer__area">
                <Footer />
            </div>
        </aside>
    )
}
