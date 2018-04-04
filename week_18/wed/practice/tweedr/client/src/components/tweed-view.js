import React from 'react';

const TweedView = ({ content, author, id, deleteTweed}) => {
    return (
        <div className="tweed">
            <p className="content">{content}</p>
            <p className="author">{author}</p>
            <p className="delete" onClick={deleteTweed}  id={id}>delete</p>
        </div>
    )
}

export default TweedView;