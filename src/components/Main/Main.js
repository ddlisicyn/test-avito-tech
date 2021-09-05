import React from 'react';
import { News } from '../News/News';
import { List } from 'semantic-ui-react';
import { Loader } from '../Loader/Loader';

export function Main({data}) {
    return (
        <main className="main">
            <Loader visibility={!!data.length}/>
            <List celled>
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