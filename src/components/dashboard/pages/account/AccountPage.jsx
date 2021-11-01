import React from 'react'
import { FaBookReader } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { DeletingUser } from '../../../../actions/authActions'
import { firebase } from '../../../../firebase/firebaseConfig'

export const AccountPage = () => {

    const dispatch = useDispatch()
    const {displayName} = useSelector(state => state.auth)
    const user = firebase.auth().currentUser;
          
    const handleDeleteUser = () => {
        dispatch( DeletingUser(user) )
    }

    return (
        <main className="main__page">
            <h1> My Account </h1>
            <div className="account__container">
                <div 
                    className="account__content-img"
                >
                    <div className="img-content">
                        <FaBookReader
                            className="account-icon"
                        />
                    </div>
                    
                </div>
                <div className="account__content-data">
                    
                    <table className="table">
                        <tr className="table__row">
                            <td className="table__column">Name</td>
                            <td className="table__column">{displayName}</td>
                        </tr>
                        <tr className="table__row">
                            <td className="table__column">Email</td>
                            <td className="table__column">{ user?.email }</td>
                        </tr>
                        <tr className="table__row">
                            <td className="table__column">ID</td>
                            <td className="table__column">{ user?.uid }</td>
                        </tr>
                    </table>
                    
                </div>
                <div className="delete__account">
                        <button
                            onClick={handleDeleteUser}
                            className="btn__delete"
                        >
                            Delete Account
                        </button>
                </div>
            </div>
        </main>
    )
}
