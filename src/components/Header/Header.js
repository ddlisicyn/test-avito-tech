import React from 'react';
import { Button } from 'semantic-ui-react';

export function Header({updateNews}) {
    return (
        <header className="header">
            <h3>Hacker News</h3>
            <Button onClick={() => updateNews()} primary>
                Update
            </Button>
        </header>
    )
}