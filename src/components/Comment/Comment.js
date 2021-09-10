import React, { useMemo } from 'react';
import { Comment as SemanticComment, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export function Comment({comment, loadMore}) {

    const {
        by,
        deleted,
        text,
        time,
        kids,
        children = []
    } = comment;

    const date = useMemo(() => (
        new Date(time * 1000).toLocaleString()
    ), [time]);

    return !deleted ? (
        <SemanticComment>
            <Icon name="user"/>
            <SemanticComment.Content>
                <SemanticComment.Author as='a'>{by}</SemanticComment.Author>
                <SemanticComment.Metadata>
                <div>{date}</div>
                </SemanticComment.Metadata>
                <SemanticComment.Text dangerouslySetInnerHTML={{__html: text}} />
                {
                kids ?
                    <SemanticComment.Actions>
                        <SemanticComment.Action
                            onClick={() => loadMore(kids)}
                        >Load more</SemanticComment.Action>
                    </SemanticComment.Actions>
                : ''
                }
                {
                children.length > 0 ? (
                    <SemanticComment.Group>
                    {
                        children.map(comment => (
                            <Comment 
                                key={comment.id} 
                                comment={comment}
                                loadMore={loadMore}
                            />
                        ))
                    }
                    </SemanticComment.Group>
                ) : null
                }
            </SemanticComment.Content>
        </SemanticComment>
    ) : null
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number,
        deleted: PropTypes.bool,
        parent: PropTypes.number,
        by: PropTypes.string,
        text: PropTypes.string,
        time: PropTypes.number,
        type: PropTypes.string,
        kids: PropTypes.array
    })
}