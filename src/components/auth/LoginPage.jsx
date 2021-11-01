import React from 'react'
import validator from 'validator'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { LoginWithEmailPassword, LoginWithGoogle } from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/uiActions'

export const LoginPage = () => {

    const dispatch = useDispatch()
    const [ formVAlues, handleInputChange ] = useForm({
        email: '',
        password: '',
    });
    const {email, password} = formVAlues

    const handleLoginGoogle = () => {
        dispatch( LoginWithGoogle() );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( isFormValid ) {
            dispatch( LoginWithEmailPassword( email, password ) )
        }
        
    }

    const isFormValid = () => {
        
        if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') )
            return false;
        } else if ( password.trim().length === 0  ) {
            dispatch( setError('Password is required') )
            return false
        }
        
        dispatch( removeError() );
       return true;
    }

    return (
        <div className="login__page">
            <form className="login__form" onSubmit={handleSubmit}>
                <header className="login__header">
                    <h3> Login </h3>
                </header>
                <input 
                    className="login__input"
                    type="email"
                    name="email"
                    placeholder="Enter an email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input 
                    className="login__input"
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                />

                <button 
                    type="submit"
                    className="btn btn__login"
                >
                    Log In
                </button>
                
                <div className="or">
                    <span></span>
                    <h4> Or </h4>
                    <span></span>
                </div>
                

                <div 
                    onClick={handleLoginGoogle}
                    className="google__btn"
                >
                    <div className="google__btn-img">
                        <img 
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7ZvVP00p4WDHmErvpPw88gHaHa%26pid%3DApi&f=1" 
                            alt="Google logo" 
                            className="google__img"
                        />
                    </div>
                    <div className="google__btn-text">
                        <span className="google__text">
                            Sign In With Google
                        </span>
                    </div>
                </div>

                <Link
                    to="/signup"
                    className="link"
                >
                    Create An Account
                </Link>
            </form>
        </div>
    )
}
