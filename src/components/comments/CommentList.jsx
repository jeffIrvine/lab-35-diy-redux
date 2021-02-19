import React from 'react';
import { getComments } from '../../selectors/CommentSelectors';
import { useSelector } from 'react-redux';
import { Comment } from './Comment';

const CommentList = () => {
  const comments = useSelector(getComments);

  const CommentInstance = comments.map(comment => (
    <li key={comment.title}>
      <Comment {...comment} />
    </li>
  ));

  return (
    <ul>
      {CommentInstance}
    </ul>
  );
};

export default CommentList;
