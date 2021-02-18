export const getBlogs = state => state.posts.blogs;

export const countBlogs = state => getBlogs(state).length;
