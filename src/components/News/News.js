import React from "react";

export function News({data}) {
        const {
            by,
            score,
            time,
            title
        } = data;

    const ratingValue = (score > 1) ? 'points' : 'point';
    const date = new Date(time * 1000).toLocaleDateString();

    return (
        <div className="main__news-item">
            <h5>{title}</h5>
            <div className="main__news-info">
                <p>{score} {ratingValue}</p>
                <p>Author: {by}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}