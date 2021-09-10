import React, { useState, useEffect } from "react";
import { Comment as SemanticComment, Header as SemanticHeader } from 'semantic-ui-react';
import { Comment } from "../../components/Comment/Comment";
import { getItemById } from "../../api/services";
import { insertChildren } from "../../utils/insertChildren";

export function Comments({rootCommentsId}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (!!rootCommentsId) {
            const promises = rootCommentsId
                .map(comment => getItemById(comment));
            Promise.all(promises)
                .then(response => setComments(response));
        }
    }, [rootCommentsId]);

    const loadMore = (kids) => {
        console.log(kids);
        const promises = kids
            .map(comment => getItemById(comment));
        Promise.all(promises)
            .then(response => {
                const newComments = [...comments];
                insertChildren(newComments, response);
                setComments(newComments);
            });
    }

    return (
        <SemanticComment.Group className="main__comments">
            <SemanticHeader as='h3' className="main__comments-header">
            Comments
            </SemanticHeader>
            {
            (comments.length > 0) ?
                comments.map(comment => (
                    <Comment 
                        key={comment.id} 
                        comment={comment} 
                        loadMore={loadMore}
                    />
                ))
            : 'No comments'
            }
        </SemanticComment.Group>  
    )
}