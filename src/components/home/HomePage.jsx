import React from 'react'
import { FaJournalWhills } from 'react-icons/fa'
import { AuthButtons } from './AuthButtons'

export const HomePage = ({history}) => {
    return (
        <main className="main__home">
            <div className="main__home-content">
                <header className="header__home">
                    <FaJournalWhills className="header__logo" />
                    <h1> D.E.G.S Journal </h1>
                    <h3>Welcome</h3>
                </header>
                <AuthButtons
                    history={history}
                />
            </div>
        </main>
    )
}
