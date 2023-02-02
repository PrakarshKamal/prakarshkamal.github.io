import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import { useModalContext } from "../context/ModalContext";
import "./Modal.css";

const Modal = ({ className, children }) => {
  const { showModal, handleCloseModal } = useModalContext();
  return (
    <Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={handleCloseModal}></section>
            <Card className={className}>{children}</Card>
          </>,
          document.querySelector("#overlays")
        )}
    </Fragment>
  );
};

export default Modal;
