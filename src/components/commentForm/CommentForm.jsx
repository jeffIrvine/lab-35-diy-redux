/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { createComment } from '../../actions/commentActions';
import { useDispatch } from 'react-redux';


const CommentForm = ({ index }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createComment({ title, body, index }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Type your comment title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <input 
        type="text"
        placeholder="Comment body"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
      <button>Create a Comment</button>
    </form>
  );
};
    
export default CommentForm;
