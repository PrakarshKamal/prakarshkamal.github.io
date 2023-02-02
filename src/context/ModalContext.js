import { useState, createContext, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, handleShowModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// custom hook to use modal context
export const useModalContext = () => {
  return useContext(ModalContext);
};
