import React from "react";
import Scrollspy from "react-scrollspy";
import data from "./data";
import Nav from "./Nav";
import "./FloatingNav.css";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy
        className="scrollspy"
        items={["header", "about", "portfolio", "contact"]}
        currentClassName="active"
        offset={-500} // offset to account for sticky header pixels
      >
        {data.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
