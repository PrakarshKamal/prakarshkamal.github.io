import movies from "../../assets/movies.png";
import hydronizer from "../../assets/hydronizer.png";
import gcal from "../../assets/gcal.png";
import news from "../../assets/news.png";
import user from "../../assets/user.jpeg";
import portfolio from "../../assets/portfolio.png";
import bash from "../../assets/bash.png";

const data = [
  {
    id: 1,
    category: "Full Stack",
    image: movies,
    title: "Ripe Mangoes",
    desc: "A fullstack application allowing users to view movie trailers and create reviews",
    demo: "https://github.com/PrakarshKamal/ripe-mangoes",
    github: "https://github.com/PrakarshKamal/ripe-mangoes",
  },
  {
    id: 2,
    category: "Full Stack",
    image: hydronizer,
    title: "Hydronizer",
    desc: "A fullstack + hardware smart water solution to track water consumption of the user",
    demo: "https://www.youtube.com/watch?v=uOv5yZM5v3Y",
    github: "https://github.com/PrakarshKamal/hydronizer",
  },
  {
    id: 3,
    category: "Front-end",
    image: gcal,
    title: "Google Calendar Clone",
    desc: "A working version of Google Calendar with event creation and labels.",
    demo: "https://pk-gcal.netlify.app/",
    github: "https://github.com/PrakarshKamal/google-calendar-clone",
  },
  {
    id: 4,
    category: "Full Stack",
    image: news,
    title: "The Daily Edition",
    desc: "A news app that fetches news data from the mediastack news API and displays in a beautiful UI",
    demo: "https://the-daily-edition.vercel.app/",
    github: "https://github.com/PrakarshKamal/the-daily-edition",
  },
  {
    id: 5,
    category: "Full Stack",
    image: user,
    title: "Social Media App",
    desc: "A Social media site with a login page, friend requests, creating and liking posts",
    demo: "https://github.com/PrakarshKamal/social-media-clone",
    github: "https://github.com/PrakarshKamal/social-media-clone",
  },
  {
    id: 6,
    category: "Front-end",
    image: portfolio,
    title: "Personal Portfolio",
    desc: "My personal portfolio website",
    demo: "https://prakarshkamal.github.io/",
    github: "https://github.com/PrakarshKamal/prakarshkamal.github.io",
  },
  {
    id: 7,
    category: "Back-end",
    image: bash,
    title: "Bash File Controller",
    desc: "A course project built using Bash to prompt user for input and perform operations on files",
    demo: "https://github.com/PrakarshKamal/bash-file-controller",
    github: "https://github.com/PrakarshKamal/bash-file-controller",
  },
];

export default data;
