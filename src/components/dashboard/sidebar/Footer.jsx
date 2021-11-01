import React from 'react'
import {FaGithub,  FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    return (
        <footer className="footer">
            <h3 className="footer__title">
                DEGS Journal
            </h3>
            <p className="copyrights"> All Rigths Reserved &copy; 2020 <br/> Erik Carcelén </p>
            <div className="social-networks">
                
                <a className="anchor__social" href="https://www.linkedin.com/in/eraqcode95/">
                    <FaLinkedin
                        className="react__icons-footer"
                    />
                </a>
                <a className="anchor__social" href="https://github.com/eraqcode">
                    <FaGithub
                        className="react__icons-footer"
                    />
                </a>
                
            </div>
            <p className="location"> Quito - Ecuador </p>
        </footer>
    )
}
