import BlogPostsPage from '../src/views/BlogPostsPage/BlogPostsPage.jsx'
import Head from 'next/head'
import { Fragment } from 'react'

const BlogPosts = () => {
  return (
    <Fragment>
      <Head />
      <BlogPostsPage />
    </Fragment>
  )
}

export default BlogPosts
