import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer,
  comments: commentsReducer
});
