import Image from "next/image";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

export const GallerySection = ({gallery}) => (
  <section id="menu" className="py-16">
    <div className="container">
      <p className="cursive text-2xl text-center">Our delicious food</p>
      <h2 className="text-center">Our specialties</h2>
      <div className="mt-3 grid grid-cols-2 lg:grid-cols-3 justify-center gap-2">
        {gallery.map((picture) => (
          <figure
            key={picture}
            className="image justify-center m-3 relative z-1"
          >
            <ImagePlaceholder className="rounded" />

            <Image
              src={picture}
              layout="responsive"
              width={300}
              height={200}
              className="rounded z-1 object-cover"
              quality={50}
              sizes="300px"
            />
          </figure>
        ))}
      </div>
    </div>

    <style jsx>{``}</style>
  </section>
);

