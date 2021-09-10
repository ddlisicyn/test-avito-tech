import React from 'react';
import { News } from '../News/News';
import { List } from 'semantic-ui-react';
import { Loader } from '../Loader/Loader';

export function Main({data, onNewsClick}) {
    return (
        <main className="main">
            <Loader visibility={!!data.length}/>
            <List celled>
            {
            data.map(news => news ? (
                <List.Item key={news.id}>
                <News
                    data={news}
                    onNewsClick={onNewsClick}
                />
                </List.Item>
                ) : null
            )
            }
            </List>
        </main>
    )
}