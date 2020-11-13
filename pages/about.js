import Image from "next/image";

import { attributes, html } from "../content/about.md";

import Hero from "@/components/common/Hero";
const { colors } = require("@/utils/colorScheme.js");

import ContactSection from "@/components/common/ContactSection";
import { SEO } from "@/components/common/SEO";

const AboutPage = () => {
  return (
    <>
      {" "}
      <SEO title={attributes.title} description={attributes.description} />
      <section className="decorated py-24">
        <div className="container">
          <figure className="w-full relative">
            <Image
              src={attributes.heroImage}
              layout="fill"
              className="object-contain"
              sizes="500px"
            />
          </figure>
          <article className="lg:mx-48">
            <h1 className="text-center">{attributes.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </div>
      </section>
      <section className="flex flex-wrap">
        <div className="w-full sm:w-1/2">
          <Hero backgroundImage="/static/bowls.jpg" dark sizes="300px" quality="50">
            <p className="cursive text-3xl text-primary">Fresh</p>
            <p className="text-4xl text-white">Delivered every day</p>
          </Hero>
        </div>
        <div className="w-full sm:w-1/2">
          <Hero backgroundImage="/static/burger.jpg" dark sizes="300px" quality="50">
            <p className="cursive text-2xl text-primary">High quality</p>
            <p className="text-4xl text-white">Locally sourced food</p>
          </Hero>
        </div>
      </section>
      <ContactSection />
      <style>{`
      section {
        background:${colors.background.regular};
      }

      figure {
        height:60vh;
      }

      article h2 {
        text-align:center;
      }      

    `}</style>
    </>
  );
};

export default AboutPage;
