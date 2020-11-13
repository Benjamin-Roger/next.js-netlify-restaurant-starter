import BlogPageComponent from "@/components/Blog/BlogPageComponent";

import { countPosts, importBlogPosts } from "@/utils/posts";

import config from "config";

import { attributes, html } from "@/content/blog.md";


const BlogPage = (props) => <BlogPageComponent {...props} {...{attributes,html}} />;

export async function getStaticProps({ params }) {
  const page = await parseInt(params.page);

  //Get posts of the current page
  const postsList = await importBlogPosts(
    (page - 1) * config.postsPerPage,
    page * config.postsPerPage
  );

  // Get posts for the blog side bar
  const recentPosts = await importBlogPosts(0,3);

  // Get current page and number of pages for Pagination component
  const postsNumber = await countPosts();
  const pagination = await {
    current: page,
    pages: Math.ceil( postsNumber / config.postsPerPage),
  };

  return {
    props: {
      postsList,
      pagination,
      recentPosts
    }
  };
}

export async function getStaticPaths() {

  // Get number of pages from total number of posts and the "posts per page" constants from general settings
  const postsNumber = await countPosts();
  const pages = Math.ceil(postsNumber / config.postsPerPage);

  // Paths array are the number of pages for static generation. The first page's slug is /blog, then /blog/page/2, blog/page/3...
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default BlogPage;
