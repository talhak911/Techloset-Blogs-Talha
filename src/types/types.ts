import { BlogPostDocument } from "../../prismicio-types";

export type SocialMediaIconType = {
  Icon: React.JSX.Element;
  link: string;
  bgAfter: string;
  bgBefore: string;
  iconColorBefore: string;
};
export type BlogPageParams = { uid: string };
export type PostsType = { posts: BlogPostDocument<string>[] };
export type LatestPostCardProps = {
  uid: string;
  blogTitle: string | null;
  imageUrl?: string | null;
  publicationDate: string | null;
};
export type BlogHeaderProps = {
  imageUrl?: string | null;
  category: string | null;
  blogTitle: string | null;
  author: string | null;
  publicationDate: string | null;
};
export type BlogCardProps = {
  uid: string;
  imageUrl?: string | null;
  blogTitle: string | null;
  summary: string | null;
};