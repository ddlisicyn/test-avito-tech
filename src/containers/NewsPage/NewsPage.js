import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../../api/services';
import { Header } from '../../components/Header/Header';
import { Icon } from 'semantic-ui-react';
import { Loader } from '../../components/Loader/Loader';
import { Comments } from '../Comments/Comments';

export function NewsPage() {
    const { id } = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        refreshComments()
    }, []);

    const refreshComments = () => {
        getItemById(id)
            .then(news => setNews(news));
    }

    const {
        by,
        time,
        title,
        url,
        kids
    } = news;

    const date = new Date(time * 1000).toLocaleDateString();

    return(
        <>
        <Header />
        <main className="main">
            <Loader visibility={!!title} />
            <div className="main__news-page">
                <div className="main__news-title">
                    <h1>{title}</h1>
                    <Icon name='linkify'/>
                    <a 
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                    ><i>Link to source</i></a>
                </div>
                <div className="main__page-author">
                    <Icon name='user outline' />
                    <p>{by}</p>
                </div>
                <div className="main__page-date">
                    <Icon name='calendar alternate outline'/>
                    <p>{date}</p>
                </div>
                <Comments rootCommentsId={kids} refreshComments={refreshComments}/>
            </div>
        </main>
        </>
    )
}