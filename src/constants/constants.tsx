import { SocialMediaIconType } from "@/types/types";
import { TwitterIcon } from "../../public/assets/icons/twitter";
import { GithubIcon } from "../../public/assets/icons/github";
import { InstagramIcon } from "../../public/assets/icons/instagram";
import { FacebookIcon } from "../../public/assets/icons/facebook";
import { LinkedInIcon } from "../../public/assets/icons/linkedIn";

export const SOCIAL_ICONS: SocialMediaIconType[] = [
  { Icon: <GithubIcon/> , bgAfter: 'githubBlack', link: "https://www.github.com/techloset" },
  { Icon:< InstagramIcon/> , bgAfter: 'instaPink', link: "https://www.instagram.com/techlosetsolutions" },
  {Icon:<FacebookIcon/>,bgAfter:'facebookBlue',link:"https://www.facebook.com/techloset"},
  {Icon:<LinkedInIcon/>,bgAfter:'linkedInBlue',link:"https://www.linkedin.com/company/techloset"},
  { Icon: <TwitterIcon/> , bgAfter: 'twitterBlue', link: "https://x.com/techloset" },
];
