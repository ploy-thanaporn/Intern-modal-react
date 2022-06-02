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
      <button onClick={() => setOpenModal(true)} className="open-btn">
        Open
      </button>
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        // shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "cornflowerblue",
          },
        }}
      >
        <h1>Modal title</h1>
        <p>Moal body</p>
        <div>
          <button onClick={() => setOpenModal(false)} className="close-btn">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
