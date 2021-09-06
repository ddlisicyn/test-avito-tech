import React from "react";
import { Rating, Icon } from 'semantic-ui-react';

export function News({data, onNewsClick}) {
    const {
        by,
        score,
        time,
        title,
        id
    } = data;

    const ratingValue = (score > 1) ? 'points' : 'point';
    const rating = (score >= 15) ? 3 :
            (score >= 10) ? 2 : 
            (score >= 5) ? 1 : 0;
    const date = new Date(time * 1000).toLocaleDateString();

    return (
        <div onClick={() => onNewsClick(id)} className="main__news-item">
            <h3>{title}</h3>
            <div className="main__news-info">
                <div className="mai__news-rating">
                    <p>{score} {ratingValue}</p>
                    <Rating 
                        icon='star' 
                        defaultRating={rating} 
                        maxRating={3} 
                        disabled
                    />
                </div>
                <div className="main__news-author">
                    <Icon name='user outline' />
                    <p>{by}</p>
                </div>
                <div className="main__news-date">
                    <Icon name='calendar alternate outline'/>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}