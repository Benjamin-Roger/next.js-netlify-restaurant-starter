import Image from "next/image";

const Hero = (props) => (
  <div className="heroWrap relative flex items-center justify-center text-center">
    {props.backgroundImage ? (
      <Image
        src={props.backgroundImage}
        layout="fill"
        className="object-cover"
        sizes={props.sizes || "100vw"}
        quality={props.quality || 75}
      />
    ) : (
      ""
    )}
    <div className="darkOverlay"></div>

    <div className="hero z-10 container">{props.children}</div>

    <style jsx>{`
      .heroWrap {
        min-height: 60vh;
      }

      .darkOverlay {
        ${props.dark ? "background:rgba(0,0,0,0.6)" : ""}
      }
    `}</style>
  </div>
);

export default Hero;
