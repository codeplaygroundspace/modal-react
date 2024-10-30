import { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalToggle() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  return (
    <>
      <Modal isOpen={isModalOpen} handleModalToggle={handleModalToggle} />
      <Button handleModalToggle={handleModalToggle}>Show modal 1</Button>
      <Button handleModalToggle={handleModalToggle}>Show modal 1</Button>
      <Button handleModalToggle={handleModalToggle}>Show modal 1</Button>
    </>
  );
}

const Modal = ({ isOpen, handleModalToggle }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal">
        <button className="close-modal" onClick={handleModalToggle}>
          &times;
        </button>
        <h1>I am a modal window 😍</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="overlay" onClick={handleModalToggle}></div>
    </>
  );
};

const Button = ({ children, handleModalToggle }) => {
  return (
    <button className="show-modal" onClick={handleModalToggle}>
      {children}
    </button>
  );
};
