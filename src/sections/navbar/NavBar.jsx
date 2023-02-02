import React from "react";
import Logo from "../../assets/logo-p.png";
import data from "./data";
import { IoIosColorPalette } from "react-icons/io";
import { useModalContext } from "../../context/ModalContext";
import "./NavBar.css";

const NavBar = () => {
  const { handleShowModal } = useModalContext();
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={handleShowModal}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
