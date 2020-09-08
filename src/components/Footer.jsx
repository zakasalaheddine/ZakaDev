import { Tag } from "./styled-components/Tag";
import Facebook from "./SocialMediaSVG/Facebook";
import Github from "./SocialMediaSVG/Github";
import Instagram from "./SocialMediaSVG/Instagram";
import Twitter from "./SocialMediaSVG/Twitter";
import Linkedin from "./SocialMediaSVG/Linkedin";

export default function Footer() {
  return (
    <footer className="flex justify-around items-center py-5">
      <Tag className="align-middle">{'<footer>'}</Tag>
      <div className="flex justify-evenly">
        <a href="https://github.com/zakasalaheddine" target="_blank" className="px-1">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/zakasalaheddine/" target="_blank" className="px-1">
          <Linkedin />
        </a>
        <a href="https://www.instagram.com/zakasalaheddine/" target="_blank" className="px-1">
          <Instagram />
        </a>
        <a href="https://www.facebook.com/zakasalaheddine" target="_blank" className="px-1">
          <Facebook />
        </a>
        <a href="https://twitter.com/ZakaSalahEddine" target="_blank" className="px-1">
          <Twitter />
        </a>

      </div>
      <Tag>{'</footer>'}</Tag>
    </footer>
  )
}