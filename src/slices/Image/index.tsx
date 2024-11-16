import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import NextImage from "next/image";

export type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <NextImage
        src={slice.primary.image.url || "/assets/images/bgImage.webp"}
        width={slice.primary.image.dimensions?.width}
        height={slice.primary.image.dimensions?.height}
        alt={slice.primary.image.alt || "Blog Image"}
      />
    </section>
  );
};

export default Image;
