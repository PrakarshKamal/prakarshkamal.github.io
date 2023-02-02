import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const data = [
  {
    id: 1,
    link: "#",
    icon: <AiFillHome />,
  },
  { id: 2, link: "#about", icon: <BsFillPersonFill /> },
  { id: 3, link: "#portfolio", icon: <ImBooks /> },
  { id: 4, link: "#contact", icon: <MdEmail /> },
];

export default data;
