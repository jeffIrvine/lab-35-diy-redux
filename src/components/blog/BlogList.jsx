import React from 'react';
import { getBlogs } from '../../selectors/blogSelectors';
import { useSelector } from 'react-redux';
import { Blog } from './Blog';

const BlogList = () => {
  const blogs = useSelector(getBlogs);

  const BlogInstance = blogs.map(blog => (
    <li key={blog.title}>
      <Blog {...blog} />
    </li>
  ));

  return (
    <ul>
      {BlogInstance}
    </ul>
  );
};

export default BlogList;
