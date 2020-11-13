import Link from "next/link";
import Image from "next/image";

import { Button } from "@material-ui/core";
const { colors } = require("@/utils/colorScheme.js");
import MarkdownRenderer from "react-markdown-renderer";

export const MenuSection = ({menuBody, menuImage}) => (
  <section id="menuSection" className="py-16 decorated">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="cursive text-2xl">Discover our food</p>
          <MarkdownRenderer markdown={menuBody} className="mb-3" />

          <Link href="/menu">
            <Button
              color="primary"
              variant="contained"
              className="textWhite md:w-1/3"
            >
              See the menu
            </Button>
          </Link>
        </div>
        <div>
          <div className="text-center mt-4">
            <Image
              loading="lazy"
              src={menuImage || "/static/meal.png"}
              height="500"
              width="510"
              quality={75}
              sizes="500px"
            />
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      section {
        background: ${colors.background.regular};
      }

      .decorated::before {
        background-image: url("/static/chili.png");
        top: 0;
        left: 0;
      }

      .decorated::after {
        background-image: url("/static/peach.png");
      }

      img {
        height: 100px;
      }
    `}</style>
  </section>
);
