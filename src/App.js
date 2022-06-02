import { useState } from "react";
import "./App.css";
// import Modal from "./components/Modal";
import Modal from "react-modal";

Modal.setAppElement("#root");
function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <h1>Hey, Click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
      {/* {openModal && <Modal closeModal={setOpenModal} />} */}
      {openModal ? <Modal closeModal={setOpenModal} /> : null}
    </div>
  );
}

export default App;
