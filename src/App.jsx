import React, { useState, useEffect, useRef } from "react";
import NavBar from "./sections/navbar/NavBar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Modal from "./components/Modal";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/ThemeContext";

const App = () => {
  const { themeState } = useThemeContext();

  const mainRef = useRef();

  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [pageYPosition, setPageYPosition] = useState(0);

  const handleShowFloatingNav = () => {
    setShowFloatingNav(true);
  };

  const handleHideFloatingNav = () => {
    setShowFloatingNav(false);
  };

  //check if floating nav should be shown or hidden
  const handleToggleFloatingNav = () => {
    //check if scroll up or down atleast 10px
    if (
      pageYPosition < mainRef?.current?.getBoundingClientRect().y - 10 ||
      pageYPosition > mainRef?.current?.getBoundingClientRect().y + 10
    ) {
      handleShowFloatingNav();
    } else {
      handleHideFloatingNav();
    }

    setPageYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(handleToggleFloatingNav, 2000);

    //clean up function
    return () => {
      clearInterval(checkYPosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageYPosition]);

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <NavBar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <Modal />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
