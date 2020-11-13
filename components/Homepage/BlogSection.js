import Link from "next/link";

import { Button } from "@material-ui/core";

const { colors } = require("@/utils/colorScheme.js");

import RecentPosts from "@/components/Blog/RecentPosts";

export const BlogSection = (props) => (
  <section className="decorated py-24">
    <div className="container">
      <p className="cursive text-2xl text-center">Our news</p>
      <h2 className="text-center">Follow our delicious blog</h2>
      <RecentPosts {...props} />
      <div className="text-center block mt-12">
        <Link href="/blog">
          <Button
            color="primary"
            variant="contained"
            size="large"
            className="textWhite"
          >
            See all posts
          </Button>
        </Link>
      </div>
    </div>
    <style jsx>{`
      section {
        background: ${colors.background.regular};
      }

      .decorated::before {
        background-image: url("/static/mixed.png");
      }

      .decorated::after {
        background-image: url("/static/chili.png");
      }
    `}</style>
  </section>
);
