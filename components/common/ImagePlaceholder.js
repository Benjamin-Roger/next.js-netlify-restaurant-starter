export default function ImagePlaceHolder(props) {
  return (
    <div
      className={`bg-gray-200 animate-pulse absolute h-full w-full top-0 left-0 z-0 ${props.className}`}
    ></div>
  );
}
