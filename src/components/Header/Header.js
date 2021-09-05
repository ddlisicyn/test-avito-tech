import React from 'react';
import { Button } from 'semantic-ui-react';

export function Header({updateNews}) {
    
    return (
        <header className="header">
            <h2>Hacker News</h2>
            <Button onClick={() => updateNews()} >
                Update
            </Button>
        </header>
    )
}