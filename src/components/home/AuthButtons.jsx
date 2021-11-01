import React from 'react'

export const AuthButtons = ( {history} ) => {
    console.log(history)
    const handleLogin = () => {
        history.push('/login')
    }
    const handleSignup = () => {
        history.push('/signup')
    }


    return (
        <div className="authButtons__content">
            <button
                onClick={ handleLogin }
                className="btn btn__home-login"
            >
                Log In
            </button>
            <button
                onClick={ handleSignup }
                className="btn btn__home-signup"
            >
                Sign Up
            </button>
        </div>
    )
}
