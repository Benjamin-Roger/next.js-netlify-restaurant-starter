import Image from "next/image";

import { SEO } from "@/components/common/SEO";
import RecentPosts from "@/components/Blog/RecentPosts";
import Pagination from "@/components/Blog/Pagination";
import BlogSideBar from "@/components/Blog/BlogSideBar";

import Transition from "@/components/common/Transition";

const BlogPageComponent = ({ postsList, pagination, recentPosts, attributes,html }) => (
  <>
    <SEO title={attributes.title} description={attributes.description} />

    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="posts sm:col-span-2">
            <Transition>
              <RecentPosts
                postsList={postsList}
                location={pagination.current}
              />
            </Transition>
            <Pagination pagination={pagination} />
          </div>

          <BlogSideBar {...{html, attributes, recentPosts}} />
        </div>
      </div>
    </section>
    <style jsx global>{`
      .posts article:first-of-type {
        width: 100%;
      }

      .posts article:first-of-type figure {
        height: 400px !important;
      }
    `}</style>
  </>
);

export default BlogPageComponent;
