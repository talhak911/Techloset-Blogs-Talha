import { SocialMediaIconType } from "@/types/types";
import { TwitterIcon } from "../../public/assets/icons/twitter";
import { GithubIcon } from "../../public/assets/icons/github";
import { InstagramIcon } from "../../public/assets/icons/instagram";
import { FacebookIcon } from "../../public/assets/icons/facebook";
import { LinkedInIcon } from "../../public/assets/icons/linkedIn";
import { COLORS } from "./colors";

export const SOCIAL_ICONS: SocialMediaIconType[] = [
  {
    Icon: <GithubIcon />,
    bgAfter: "githubBlack",
    link: "https://www.github.com/techloset",
    bgBefore: "white",
    iconColorBefore: COLORS.orangeMain,
  },
  {
    Icon: <InstagramIcon />,
    bgAfter: "instaPink",
    link: "https://www.instagram.com/techlosetsolutions",
    bgBefore: "white",
    iconColorBefore: COLORS.orangeMain,
  },
  {
    Icon: <FacebookIcon />,
    bgAfter: "facebookBlue",
    link: "https://www.facebook.com/techloset",
    bgBefore: "white",
    iconColorBefore: COLORS.orangeMain,
  },
  {
    Icon: <LinkedInIcon />,
    bgAfter: "linkedInBlue",
    link: "https://www.linkedin.com/company/techloset",
    bgBefore: "white",
    iconColorBefore: COLORS.orangeMain,
  },
  {
    Icon: <TwitterIcon />,
    bgAfter: "twitterBlue",
    link: "https://x.com/techloset",
    bgBefore: "white",
    iconColorBefore: COLORS.orangeMain,
  },
];

export const SOCIAL_ICONS_BLOG: SocialMediaIconType[] = [
  {
    Icon: <FacebookIcon />,
    bgAfter: "facebookBlue",
    link: "https://www.facebook.com/techloset",
    iconColorBefore: "white",
    bgBefore: COLORS.orangeMain,
  },
  {
    Icon: <LinkedInIcon />,
    bgAfter: "linkedInBlue",
    link: "https://www.linkedin.com/company/techloset",
    iconColorBefore: "white",
    bgBefore: COLORS.orangeMain,
  },
  {
    Icon: <TwitterIcon />,
    bgAfter: "twitterBlue",
    link: "https://x.com/techloset",
    iconColorBefore: "white",
    bgBefore: COLORS.orangeMain,
  },
];
