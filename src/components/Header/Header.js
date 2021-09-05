import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

export function Header({updateNews, backToMainPage}) {
    const { id } = useParams();
    const history = useHistory();

    return (
        <header className="header">
            <h2>Hacker News</h2>
            <button
                onClick={() => updateNews()}
                className={!!id ? 'hide' : 'header__button'} >
                Update
            </button>
            <button
                onClick={() => history.goBack()}
                className={!!id ? 'header__button' : 'hide' } >
                Back
            </button>
        </header>
    )
}