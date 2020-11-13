import Image from "next/image";
import CustomCarousel from "@/components/common/CustomCarousel";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

export const TestimonialSection = ({testimonials,testimonialsBackgroundImage}) => (
  <section id="testimonials" className="relative">
    <Image
      src={testimonialsBackgroundImage || "/static/testimonial.jpg"}
      layout="fill"
      className="object-cover"
      sizes="100vw"
      quality={50}
    />
    <div className="darkOverlay"></div>
    <div className="container py-16 text-center relative">
      <p className="cursive text-2xl">What they say about us</p>
      <h2 className="text-white">Our clients</h2>

      <CustomCarousel parentId="testimonials">
        {testimonials.map((testimonial, key) => (
          <div key={`testimonial-${key}`} className="p-3">
            <div className="bg-white text-center p-5 py-10 rounded">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.body}</p>
              <figure className="relative mt-5 w-24 mx-auto h-24">
                <ImagePlaceholder className="rounded-full" />
                <Image
                  loading="lazy"
                  src={testimonial.image}
                  layout="fill"
                  className="rounded-full object-cover"
                  sizes="75px"
                  quality="50"
                />
              </figure>
            </div>
          </div>
        ))}
      </CustomCarousel>
    </div>
  </section>
);

