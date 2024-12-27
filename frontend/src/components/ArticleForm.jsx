import React, { useState } from 'react';
import './style.css'
const ArticleForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = (status) => {
    onSave({ title, content, status });
  };

  return (
    <div className="container">
      <h2>Create or Edit Article</h2>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" className="save-draft" onClick={() => handleSave('draft')}>
          Save Draft
        </button>
        <button type="button" className="publish" onClick={() => handleSave('published')}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
