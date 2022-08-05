import { useState } from "react";
import "./Card.css";
import Modal from "react-modal";
// import Modal from "./Modal";

function Card(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Modal isOpen={modalIsOpen}>
        <h2>{props.name}</h2>
        <p>Body</p>
        <button className="card-button" onClick={() => setModalIsOpen(false)}>
          Close
        </button>
      </Modal>
      {/* <div setOpenModal={setModalOpen ? 1 : 0} className="background">
        <div className="modal-wrapper">Modal</div>
      </div> */}
      <div className="card">
        <div className="card-body">
          <img src={props.url} alt="flag" className="card-image" />
          <h2 className="card-title">{props.name}</h2>
        </div>
        <button className="card-button" onClick={() => setModalIsOpen(true)}>
          State Info
        </button>
      </div>
    </div>
  );
}

export default Card;
