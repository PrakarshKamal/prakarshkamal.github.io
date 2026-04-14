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
import PcBuildPage from "./pages/PcBuildPage";
import { useThemeContext } from "./context/ThemeContext";
import { isPcBuildPath, restoreRedirectedPath } from "./utils/sitePaths";

restoreRedirectedPath();

const App = () => {
  const { themeState } = useThemeContext();
  const showPcBuildPage =
    typeof window !== "undefined" && isPcBuildPath(window.location.pathname);

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

  useEffect(() => {
    if (showPcBuildPage || typeof window === "undefined") {
      return;
    }

    const scrollToHashTarget = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) {
        return;
      }

      const target = document.getElementById(hash);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scrollToHashTarget();
    window.addEventListener("hashchange", scrollToHashTarget);

    return () => {
      window.removeEventListener("hashchange", scrollToHashTarget);
    };
  }, [showPcBuildPage]);

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      {showPcBuildPage ? (
        <PcBuildPage />
      ) : (
        <>
          <NavBar />
          <Header />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
      <Modal />
      <Theme />
      {!showPcBuildPage && showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
