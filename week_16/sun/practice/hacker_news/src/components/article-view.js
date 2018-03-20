import React from 'react';

const ArticleView = ({ title, author, openModal }) => {
    return (
        <div class="article" onClick={openModal}>
            <h1 class="title">{title}</h1>
            <h3 class="author">{`Author: ${author}`}</h3>
        </div>
    )
};

export default ArticleView;