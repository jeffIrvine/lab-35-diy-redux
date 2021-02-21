import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../actions/postActions';
import CommentForm from '../commentForm/CommentForm';
import CommentList from '../comments/CommentList';

export const Blog = ({ title, body, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBlog(title));
  };

  return (
    <>
      <dl>    
        <dt>Title</dt> 
        <dd>{title}</dd>

        <dt>Blog - Body</dt> 
        <dd>{body}</dd>

      </dl>
      <button onClick={handleClick}>DELETE</button>

      <CommentForm index={index}/>
      <CommentList />
    </>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};
