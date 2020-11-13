import Link from "next/link";
import Image from "next/image";


const { colors } = require("@/utils/colorScheme");
import returnDate from '@/utils/returnDate';

const PostItem = ({ attributes, excerpt, slug }) => (
  <>
    <article key={slug} className="post p-3 px-5 w-1/3 flex-grow block">
      <Link href={`/blog/post/${slug}`} as={`/blog/post/${slug}`}>
        <a className="block h-full rounded-lg bg-white shadow">
          <div className="pb-12 relative h-full">
            <figure className="h-1/2 w-full relative">
              <Image
                src={attributes.thumbnail}
                layout="fill"
                className="object-cover rounded-t-lg"
                quality={50}
                sizes="500px"
              />
            </figure>
            <div className="px-3 py-2">
              <h3 className="duration-150 hover:text-primary">
                {attributes.title}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
            <div className="post__meta h-12 px-3 absolute w-100 bottom-0 w-full flex items-center">
              <p className="text-sm">{returnDate(attributes.date)}</p>
            </div>
          </div>
        </a>
      </Link>
    </article>
    <style jsx>{`
      .post {
        min-width: 250px;
        min-height: 500px;
      }

      .post > * {
        color: ${colors.text.regular};
      }

      figure {
        max-width: 100%;
        height: 30%;
        min-height: 200px;
      }

      .post__meta {
        border-top: 1px solid ${colors.text.regular};
      }
    `}</style>
  </>
);

const PostItemSmall = ({ attributes, slug }) => (
  <>
    <article key={slug} className="post flex-grow block my-2">
      <Link href={`/blog/post/${slug}`} as={`/blog/post/${slug}`}>
        <a className="flex h-full">
          <figure className="relative pb-12 relative h-24 w-24">
            <Image
              src={attributes.thumbnail}
              layout="fill"
              className="object-cover rounded-lg  shadow"
              quality={50}
              sizes="500px"
            />
          </figure>
          <div className="px-3 py-2 w-2/3">
            <h3 className="duration-150 hover:text-primary text-lg">
              {attributes.title}
            </h3>
          </div>
        </a>
      </Link>
    </article>
    <style jsx>{`
      
      .post > * {
        color: ${colors.text.regular};
      }

      .postData {
        border-top: 1px solid ${colors.text.regular};
      }
    `}</style>
  </>
);

export { PostItem, PostItemSmall };
