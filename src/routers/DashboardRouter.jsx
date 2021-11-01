import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Redirect, Route, Switch } from 'react-router-dom'
import { ChangeTheme } from '../actions/themeAction'
import { Header } from '../components/dashboard/header/Header'
import { AccountPage } from '../components/dashboard/pages/account/AccountPage'
import { FormNotes } from '../components/dashboard/pages/formNotes/FormNotes'
import { NotesPage } from '../components/dashboard/pages/notes/NotesPage'
import { ThemesPage } from '../components/dashboard/pages/themes/ThemesPage'
import { Sidebar } from '../components/dashboard/sidebar/Sidebar'
import { useViewport } from '../hooks/useViewport'
export const DashboardRouter = () => {

    const [showSidebar, setShowSidebar] = useState(false) 
    const [width] = useViewport()
    const theme = useSelector(state => state.themes)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme-color');
        if ( currentTheme ) {
            dispatch( ChangeTheme( currentTheme ) )
        }
        
    }, [dispatch])

    useEffect(() => {
       if (width > 768) {
           setShowSidebar(true)
       }else{
           setShowSidebar(false)
       }
    }, [width])   


    return (
        <div className={`dashboard ${theme}`}>
            <Header 
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div className="dashboard__content">
                <Sidebar 
                    showSidebar={showSidebar}
                    
                />
                <div className="page__content">
                    <Switch>
                        <Route 
                            path="/dashboard/notes"
                            exact
                            component={ NotesPage }
                        />
                        <Route 
                            path="/dashboard/newNote"
                            exact
                            component={ FormNotes }
                        />
                        <Route 
                            path="/dashboard/themes"
                            exact
                            component={ ThemesPage }
                        />
                        <Route 
                            path="/dashboard/account"
                            exact
                            component={ AccountPage }
                        />

                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
            
            
        </div>
    )
}
