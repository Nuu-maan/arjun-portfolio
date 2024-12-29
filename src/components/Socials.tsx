import {
  SiGithub,
  SiDiscord,
  SiX,
} from "@icons-pack/react-simple-icons";
import { AtSign } from "lucide-react";

const links = [
  {
    url: "https://github.com/fearhatred",
    icon: SiGithub,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "https://discord.com/users/1225293839498084404",
    icon: SiDiscord,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "mailto:hello@fearhatred@proton.me",
    icon: AtSign,
    newTab: false,
    rel: "noreferrer",
  },
];

export default function SocialGallery() {
  return (
    <>
      <div className="flex h-full gap-5">
        {links.map((link) => (
          <a
            href={link.url}
            className="transition-transform active:scale-95"
            target={link.newTab ? "_blank" : undefined}
            rel={link.rel}
            key={link.url}
          >
            <link.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </>
  );
}
