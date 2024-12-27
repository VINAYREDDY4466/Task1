import React from 'react';
import './style.css'

const ArticleList = ({ articles }) => (
  <div className="container article-list">
    <h2>Articles</h2>
    <ul>
      {articles.map((article) => (
        <li className="article-item" key={article._id}>
          <span className="article-title">{article.title}</span> - 
          <span className="article-status"> {article.status}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ArticleList;
