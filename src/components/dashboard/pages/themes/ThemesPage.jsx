import React from 'react'
import { useDispatch } from 'react-redux'
import { ChangeTheme } from '../../../../actions/themeAction'

export const ThemesPage = () => {

    const dispatch = useDispatch()

    const handleClickTheme = (theme='theme-blue') => {
        dispatch( ChangeTheme( theme ) )
        localStorage.setItem('theme-color', theme)
    }


    return (
        <main className="main__page">
            <h1>Choose your theme</h1>
            <div className="themes__container">
                <div
                    onClick={ () => handleClickTheme( 'theme-blue' ) } 
                    className="theme theme-blue"
                >
                </div>
                <div
                    onClick={ () => handleClickTheme( 'theme-green' ) } 
                    className="theme theme-green"
                >
                </div>
                <div
                    onClick={ () => handleClickTheme( 'theme-pink' ) } 
                    className="theme theme-pink"
                >
                </div>
                <div
                    onClick={ () => handleClickTheme( 'theme-orange' ) } 
                    className="theme theme-orange"
                >
                </div>
                <div
                    onClick={ () => handleClickTheme( 'theme-cyan' ) } 
                    className="theme theme-cyan"
                >
                </div>
                <div
                    onClick={ () => handleClickTheme( 'theme-black' ) } 
                    className="theme theme-black"
                >
                </div>
                <div
                    onClick={ () => handleClickTheme( 'theme-light' ) } 
                    className="theme theme-light"
                >
                </div>
                <div
                    onClick={ () => handleClickTheme( 'theme-gradient' ) } 
                    className="theme theme-gradient"
                >
                </div>
            </div>
        </main>
    )
}
