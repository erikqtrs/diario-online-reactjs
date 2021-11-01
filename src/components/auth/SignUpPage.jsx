import React from 'react'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { RegisterNewUser } from '../../actions/authActions'
import { setError, removeError } from '../../actions/uiActions'
import { useForm } from '../../hooks/useForm'

export const SignUpPage = () => {

    const dispatch = useDispatch()
    const [ formVAlues, handleInputChange ] = useForm({
        name: '',
        lastname: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, lastname, email, password, password2 } = formVAlues;

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validation
        if ( isFormValid ) {
            dispatch( RegisterNewUser(email, password, name, lastname) )
        }
        
    }

    const isFormValid = () => {
        
        if ( name.trim().length === 0 ) {
            dispatch( setError('Name is required') )
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Password should be at least 6 characters and match each other') )
            return false
        }
        
        dispatch( removeError() );
       return true;
    }

    return (
        <div className="signUp__page">
            <form  className="signUp__form" onSubmit={handleSubmit}>
                <header className="signUp__header">
                    <h3> Sign Up </h3>
                </header>
                <input 
                    className="signUp__input"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={ name }
                    onChange={handleInputChange}
                />
                <input 
                    className="signUp__input"
                    type="text"
                    name="lastname"
                    placeholder="Enter your lastname"
                    value={ lastname }
                    onChange={handleInputChange}
                />
                <input 
                    className="signUp__input"
                    type="email"
                    name="email"
                    placeholder="Enter an email"
                    value={ email }
                    onChange={handleInputChange}
                />
                <input 
                    className="signUp__input"
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={ password }
                    onChange={handleInputChange}
                />
                <input 
                    className="signUp__input"
                    type="password" 
                    name="password2" 
                    placeholder="Confirm your Password"
                    value={ password2 }
                    onChange={handleInputChange}
                />

                <button 
                    type="submit"
                    className="btn btn__signUp"
                >
                    Sign Up
                </button>
                
                <div className="link__container">
                    <span className="link__title">
                        Already have an account?
                    </span>
                   <Link
                        to="/login"
                        className="link"
                    >
                        Log In
                   </Link>
                </div>
                
            </form>
        </div>
    )
}
