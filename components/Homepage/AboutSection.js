import Link from "next/link";
import Image from "next/image";

import { Button } from "@material-ui/core";

import MarkdownRenderer from "react-markdown-renderer";

export const AboutSection = ({aboutBody, aboutImage}) => (
  <section id="about-us" className="py-16 decorated">
    <div className="container grid grid-cols-1 lg:grid-cols-2">
      <div className="text-center">
        <Image
          loading="lazy"
          src={aboutImage || "/static/about.png"}
          height="500"
          width="510"
          className="object-contain"
        />
      </div>
      <div>
        <p className="cursive text-2xl">A few words about us</p>
        <MarkdownRenderer markdown={aboutBody} className="mb-3" />
        <Link href="/about">
          <Button
            color="primary"
            variant="contained"
            size="large"
            className="textWhite"
          >
            Get to know us
          </Button>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .decorated::before {
        background-image: url("/static/mixed.png");
      }

      .decorated::after {
        background-image: url("/static/salad.png");
      }
    `}</style>
  </section>
);
