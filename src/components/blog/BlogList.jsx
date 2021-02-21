import React from 'react';
import { getBlogs } from '../../selectors/blogSelectors';
import { useSelector } from 'react-redux';
import { Blog } from './Blog';

const BlogList = () => {
  const blogs = useSelector(getBlogs);

  const blogInstance = blogs.map((blog, index) => (
    <li key={blog.title}>
      <Blog index={index} {...blog} />
    </li>
  ));

  return (
    <ul>
      {blogInstance}
    </ul>
  );
};

export default BlogList;
