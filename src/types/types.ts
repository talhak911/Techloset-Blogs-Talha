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
export type LatestPostsCardProps = {
  imageUrl: string;
  title: string;
  date: string;
};
