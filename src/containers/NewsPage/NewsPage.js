import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsById } from '../../api/getNews';
import { Header } from '../../components/Header/Header';
import { Icon } from 'semantic-ui-react';
import { Loader } from '../../components/Loader/Loader';

export function NewsPage() {
    const { id } = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        getNewsById(id)
            .then(news => setNews(news));
    }, []);

    const {
        by,
        time,
        title,
        url
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
                    <a href={url}><i>Link to source</i></a>
                </div>
                <div className="main__page-author">
                    <Icon name='user outline' />
                    <p>{by}</p>
                </div>
                <div className="main__page-date">
                    <Icon name='calendar alternate outline'/>
                    <p>{date}</p>
                </div>
            </div>
        </main>
        </>
    )
}