import Link from "next/link";

import { Button } from "@material-ui/core";

import Hero from "@/components/common/Hero";
import { SEO } from "@/components/common/SEO";

import {
  AboutSection,
  BlogSection,
  CardCtaSection,
  MenuSection,
  GallerySection,
  TestimonialSection,
} from "@/components/Homepage";

const { colors } = require("@/utils/colorScheme.js");

import { attributes } from "../content/home.md";
import { importBlogPosts } from "@/utils/posts";

const HomePage = (props) => (
  <>
    <SEO title={attributes.title} description={attributes.description} />
    <section>
      <Hero backgroundImage={attributes.heroImage}>
        <h1 className="text-white">{attributes.title}</h1>
        <Link href="/menu">
          <Button
            color="primary"
            variant="contained"
            size="large"
            className="textWhite"
          >
            See the menu
          </Button>
        </Link>
      </Hero>
    </section>

    <article>
      <AboutSection {...attributes} />

      <CardCtaSection {...attributes} />

      <MenuSection {...attributes} />

      <GallerySection {...attributes} />

      <TestimonialSection {...attributes} />

      <BlogSection {...props} />
    </article>

    <style>{`
    .cursive {
      color: ${colors.primary.main};
    }

    `}</style>
  </>
);

export async function getStaticProps() {
  const postsList = await importBlogPosts(0, 3);

  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  };
}

export default HomePage;
