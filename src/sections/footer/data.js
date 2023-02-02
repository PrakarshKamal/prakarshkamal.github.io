import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const links = [
  {
    id: 1,
    link: "#",
    title: "Home",
  },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#portfolio", title: "Projects" },
  { id: 4, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/prakarsh-kamal/",
    icon: <FaLinkedin />,
  },
  { id: 2, link: "https://github.com/PrakarshKamal", icon: <FaGithub /> },
  { id: 3, link: "mailto:prakarshkamal@gmail.com", icon: <SiGmail /> },
  { id: 4, link: "https://www.instagram.com/pangkaxd/", icon: <FaInstagram /> },
];
