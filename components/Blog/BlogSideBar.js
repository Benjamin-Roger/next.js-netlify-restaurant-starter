import Image from "next/image";
import RecentPosts from "@/components/Blog/RecentPosts";

const BlogSideBar = ({ html, attributes, recentPosts }) => (
  <>
    <aside className="sm:col-span-1">
      {html ? (
        <div className="p-3">
          <div className="bg-white shadow rounded-lg p-3 relative text-center">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="p-3">
        <div className="bg-white shadow rounded-lg p-3 relative">
          <RecentPosts postsList={recentPosts} size="small" />
        </div>
      </div>
    </aside>
  </>
);

export default BlogSideBar;
