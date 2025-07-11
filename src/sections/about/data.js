import { FaAward } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { FaCoffee } from "react-icons/fa";

const startDate = new Date("2024-01-01");
const currentDate = new Date();

const daysElapsed = Math.floor(
  (currentDate - startDate) / (1000 * 60 * 60 * 24)
);

const estimatedCoffees = daysElapsed * 2;

const data = [
  {
    id: 1,
    icon: <FaAward />,
    title: "Experience",
    desc: "1+ YOE",
  },
  { id: 2, icon: <ImBooks />, title: "Projects", desc: "10+ Completed" },
  {
    id: 3,
    icon: <FaCoffee />,
    title: "Coffees Consumed",
    desc: `${estimatedCoffees}`,
  },
];

export default data;
