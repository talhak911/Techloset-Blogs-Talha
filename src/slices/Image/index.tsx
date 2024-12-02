import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

export type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isFilled.image(slice.primary.image) && (
        <PrismicNextImage field={slice.primary.image} fallbackAlt=""/>
      )}
    </section>
  );
};

export default Image;
