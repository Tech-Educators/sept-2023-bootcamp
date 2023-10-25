import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    // !showModal is the opposite of the current value of showModal
    // meaning it sets it to true when its false, and false when its true
    setShowModal(!showModal);
  }

  return (
    <>
      <button onClick={handleShowModal}>Show/Hide Modal</button>
      {/* We are conditionally rendering Modal, based on whether showModal is true or false */}
      {showModal && <Modal handleShowModal={handleShowModal} />}
    </>
  );
}

export default App;
