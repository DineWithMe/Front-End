import BlogPostPage from '../src/views/BlogPostPage/BlogPostPage.jsx'
import Head from 'next/head'
import { Fragment } from 'react'

const BlogPost = () => {
  return (
    <Fragment>
      <Head />
      <BlogPostPage />
    </Fragment>
  )
}

export default BlogPost
