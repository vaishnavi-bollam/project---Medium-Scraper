import React from 'react';

function ArticleItem({ article }) {
    return (
        <div className="article-item">
            <h2><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h2>
            <p>{article.author}</p>
            <p>{new Date(article.date).toLocaleDateString()}</p>
        </div>
    );
}

export default ArticleItem;
