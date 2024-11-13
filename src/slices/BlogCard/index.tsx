import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogCard`.
 */
export type BlogCardProps = SliceComponentProps<Content.BlogCardSlice>;

/**
 * Component for "BlogCard" Slices.
 */
const BlogCard = ({ slice }: BlogCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_card (variation: {slice.variation}) Slices
    </section>
  );
};

export default BlogCard;
