import React, { useState, useEffect } from 'react';
import ArticleForm from '../components/ArticleForm.jsx';
import ArticleList from '../components/ArticleList.jsx';


const HomePage = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await fetch('http://localhost:5000/api/articles');
    const data = await res.json();
    setArticles(data);
  };

  const saveArticle = async (article) => {
    await fetch('http://localhost:5000/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    });
    fetchArticles();
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="container">
      <ArticleForm onSave={saveArticle} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default HomePage;
