import { useState } from "react";
import "./Card.css";
import { Modal } from "./Modal";

function Card(props) {
  // Modal function
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="card">
        <div className="card-body">
          <img src={props.url} alt="flag" className="card-image" />
          <h2 className="card-title">{props.name}</h2>
        </div>
        <button className="card-button" onClick={openModal}>
          State Info
        </button>
      </div>
    </div>
  );
}

export default Card;
