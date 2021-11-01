import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/firebaseConfig'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { LoginPage } from '../components/auth/LoginPage'
import { SignUpPage } from '../components/auth/SignUpPage'
import { HomePage } from '../components/home/HomePage'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { useDispatch } from 'react-redux'
import { LoginAction } from '../actions/authActions'
import { LoadingNotes } from '../actions/notesActions'
export const AppRouter = () => {

    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged( user => {
            if ( user?.uid ) {
                dispatch( LoginAction( user.uid, user.displayName ) )
                setIsLoggedIn(true)
                dispatch( LoadingNotes(user.uid) )
            }else {
                setIsLoggedIn(false)
            }
        } )
    }, [dispatch, setIsLoggedIn])

    return (
        <Router>
            <Switch>
                <PublicRoutes
                    path="/"
                    exact
                    component={ HomePage }
                    isAuthenticated={isLoggedIn}
                />
                <PublicRoutes
                    path="/login"
                    exact
                    component={ LoginPage }
                    isAuthenticated={isLoggedIn}
                />
                <PublicRoutes
                    path="/signup"
                    exact
                    component={ SignUpPage }
                    isAuthenticated={isLoggedIn}
                />
                <PrivateRoutes 
                    path="/dashboard"
                    component={ DashboardRouter }
                    isAuthenticated={isLoggedIn}
                />
            </Switch>
        </Router>
    )
}
