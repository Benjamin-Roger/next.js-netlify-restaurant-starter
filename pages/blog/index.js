import config from "config";
import { countPosts, importBlogPosts } from "@/utils/posts";

import BlogPageComponent from "@/components/Blog/BlogPageComponent";

import { attributes, html } from "@/content/blog.md";

const BlogPage = (props) => (
  <BlogPageComponent {...props} {...{ attributes, html }} />
);

export async function getStaticProps() {
  // Get posts for the first page
  const postsList = await importBlogPosts(0, config.postsPerPage);

  // Get current page and number of pages for Pagination component
  const postsNumber = await countPosts();
  const pagination = {
    current: 1,
    pages: Math.ceil(postsNumber / config.postsPerPage),
  };

  return {
    props: {
      postsList,
      pagination,
      recentPosts: postsList, // for the first page, recent posts is the same array of posts as in the main body
    },
  };
}

export default BlogPage;
