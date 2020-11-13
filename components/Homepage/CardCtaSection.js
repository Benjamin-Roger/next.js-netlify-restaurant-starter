import Image from "next/image";
import MarkdownRenderer from "react-markdown-renderer";

export const CardCtaSection = ({cards, cardsBackgroundImage}) => (
  <section id="cta" className="relative">
    <Image
      src={cardsBackgroundImage || "/static/bbq.jpg"}
      layout="fill"
      className="object-cover"
      sizes="100vw"
      quality={50}
    />
    <div className="darkOverlay"></div>
    <div className="container py-16 text-center relative">
      <p className="cursive text-2xl">Our strengths</p>
      <h2 className="text-white">Why choose our food ?</h2>
      <div className="flex mt-4 flex-wrap justify-around">
        {cards.map((card, key) => (
          <figure
            key={`card-${key}`}
            className="block card-item m-2 bg-white shadow rounded p-3 w-full sm:w-1/3 md:w-1/5 hover:animate-pulse"
          >
            <img src={card.image} className="p-3 mx-auto" />
            <MarkdownRenderer markdown={card.body} />
          </figure>
        ))}
      </div>
    </div>

    <style jsx>{`
      img {
        height: 100px;
      }
    `}</style>
  </section>
);
