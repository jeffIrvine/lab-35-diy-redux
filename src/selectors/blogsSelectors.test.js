import { countBlogs, getBlogs } from './blogSelectors';

describe('blog selectors', () => {
  it('get a list of blogs from state', () => {
    const state = {
      posts: {
        blogs: [{ title: 'title', body: 'body' }]
      }
    };
    const blogs = getBlogs(state);

    expect(blogs).toEqual([{ title: 'title', body: 'body' }]);
  });

  it('select the number of blogs', () => {
    const state = {
      posts: {
        blogs: [{ title: 'title', body: 'body' }]
      }
    };

    expect(countBlogs(state)).toEqual(1);
  });
});
