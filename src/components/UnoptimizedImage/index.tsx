import Image, { ImageProps } from "next/image";

const UnoptimizedImage = (props: ImageProps) => {
  return <Image {...props} unoptimized alt={props.alt || ""} />;
};

export default UnoptimizedImage;
