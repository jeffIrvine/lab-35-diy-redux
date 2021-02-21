import { deleteBlog } from '../actions/postActions';
import reducer from './postReducer';

describe('blog reducer', () => {
  it('should create a blog with CREATE_BLOG action', () => {
    const state = {
      blogs: []
    };

    const action = {
      type: 'CREATE_BLOG',
      payload: { title: 'Test Blog', body: 'Body test text' }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      blogs: [{ title: 'Test Blog', body: 'Body test text' }]
    });
  });

  it('should delete a blog with DELETE_BLOG', () => {
    const state = {
      blogs: [{ title: 'Test Blog', body: 'Body test text' }]
    };

    const action = deleteBlog('Test Blog');

    expect(reducer(state, action)).toEqual({ blogs: [] });
  });
});
