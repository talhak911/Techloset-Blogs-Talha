import type { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
export const richTextcomponents: JSXMapSerializer = {
  image: ({ node }) => (
    <div className="relative my-6 w-full">
      <Image
        src={node.url || ""}
        alt={node.alt || "Rich Text Image"}
        width={node.dimensions?.width}
        height={node.dimensions?.height}
        className="object-contain"
        layout="intrinsic"
      />
    </div>
  ),
  heading1: ({ children }) => (
    <h2 className="py-5 text-3xl font-extrabold">{children}</h2>
  ),
  heading2: ({ children }) => (
    <h2 className="py-5 text-2xl font-bold">{children}</h2>
  ),
  heading3: ({ children }) => <h2 className="pt-2">{children}</h2>,
  paragraph: ({ children }) => (
    <p className="text-greyText py-4"> {children}</p>
  ),
  list: ({ children }) => (
    <ul className="list-disc space-y-3 font-light">
      {children.map((item) => item)}
    </ul>
  ),
  listItem: ({ text }) => <li className="text-greyText font-light">{text}</li>,
  oList: ({ children }) => (
    <ul className="text-greyText list-decimal pl-[40px] font-light">
      {children.map((item) => item)}
    </ul>
  ),
  oListItem: ({ children }) => <li className="font-light">{children}</li>,
  hyperlink: ({ children, node }) => (
    <a
      href={node.data.url}
      target={node.data.url || "_self"}
      rel="noopener noreferrer"
      className="text-blue underline"
    >
      {children}
    </a>
  ),
};
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <section>
      <PrismicRichText
        field={slice.primary.rich_text}
        components={richTextcomponents}
      />
    </section>
  );
};

export default RichText;
