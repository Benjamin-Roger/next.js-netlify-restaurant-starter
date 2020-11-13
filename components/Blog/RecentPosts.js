import { PostItem, PostItemSmall } from "@/components/Blog/PostItem";

const RecentPosts = ({ postsList, size }) => (
  <>
    <div className={`flex justify-around relative z-10 flex-wrap`}>
      {postsList.map((post,key) =>
        size === "small" ? (
          <PostItemSmall key={post.attributes.title + key} {...post} />
        ) : (
          <PostItem key={post.attributes.title  + key} {...post} />
        )
      )}
    </div>
  </>
);

export default RecentPosts;
