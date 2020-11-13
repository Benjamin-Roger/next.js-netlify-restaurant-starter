import fs from "fs";
import path from "path";

import Hero from "@/components/common/Hero";
import { SEO } from "@/components/common/SEO";
import RecentPosts from "@/components/Blog/RecentPosts";
import { importBlogPosts } from "@/utils/posts";
import returnDate from '@/utils/returnDate';

const Post = ({ blogpost, postsList }) => {
  if (!blogpost) return <div>not found</div>;

  const { html, attributes } = blogpost;



  return (
    <>
      <SEO title={attributes.title} description={attributes.description} />

      <section>
        <Hero backgroundImage={attributes.thumbnail} dark>
          <p className="text-xl text-white">
            Written by {attributes.author.name} | {returnDate(attributes.date)}
          </p>
          <h1 className="text-white">{attributes.title}</h1>
        </Hero>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="posts sm:col-span-2">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>

            <aside className="sm:col-span-1">
              <div className="p-3">
                <div className="bg-white shadow rounded-lg p-3 relative">
                  <RecentPosts postsList={postsList} size="small" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), "content/blogPosts"))
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        params: { slug: trimmedName },
      };
    });

  return {
    paths,
    fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const blogpost = await import(`@/content/blogPosts/${slug}.md`).catch(
    () => null
  );

  const postsList = await importBlogPosts(0, 3);

  return {
    props: {
      blogpost: blogpost.default,
      postsList,
    },
  };
}

export default Post;
