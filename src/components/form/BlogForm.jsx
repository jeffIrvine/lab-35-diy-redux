import React, { useState } from 'react';
import { createBlog } from '../../actions/postActions';
import { useDispatch } from 'react-redux';


const BlogForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createBlog({ title, body }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Type your title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <input 
        type="text"
        placeholder="Text body"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
      <button>Create a Blog</button>
    </form>
  );
};
    
export default BlogForm;
