import React from 'react';
import ArticleItem from './ArticleItem';

function ArticleList({ articles }) {
    return (
        <div className="article-list">
            {articles.length > 0 ? (
                articles.map((article, index) => (
                    <ArticleItem key={index} article={article} />
                ))
            ) : (
                <p>No articles found for this topic.</p>
            )}
        </div>
    );
}

export default ArticleList;
