import React from 'react';
import { News } from '../News/News';
import { List } from 'semantic-ui-react';

export function Main({data}) {
    return (
        <main className="main">
            <List celled ordered>
            {
            data.map(news => (
                <List.Item>
                <News
                    key={news.id}
                    data={news}
                />
                </List.Item>
            ))
            }
            </List>
        </main>
    )
}