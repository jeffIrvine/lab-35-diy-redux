import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

export const Comment = ({ title, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(title));
  };

  return (
    <>
      <dl>    
        <dt>Title</dt> 
        <dd>{title}</dd>

        <dt>Comment - Body</dt> 
        <dd>{body}</dd>

      </dl>
      <button onClick={handleClick}>DELETE</button>
    </>
  );
};

Comment.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};
