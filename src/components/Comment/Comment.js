import React, { useMemo } from 'react';
import { Comment as SemanticComment, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export function Comment({comment, loadMore}) {

    const {
        by,
        text,
        time,
        kids,
        children = []
    } = comment;

    const date = useMemo(() => (
        new Date(time * 1000).toLocaleString()
    ), [time]);

    return (
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
        <SemanticComment.Group>
            {
            (children.length > 0) ? 
                children.map(comment => (
                    <Comment 
                        key={comment.id} 
                        comment={comment}
                        loadMore={loadMore}
                    />
                )) : null
            }
        </SemanticComment.Group>
      </SemanticComment.Content>
    </SemanticComment>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number,
        parent: PropTypes.number,
        by: PropTypes.string,
        text: PropTypes.string,
        time: PropTypes.number,
        type: PropTypes.string,
        kids: PropTypes.array
    })
}