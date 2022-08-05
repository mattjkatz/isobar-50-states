import { useState } from "react";
import "./Card.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Card(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const none = "none";
  return (
    <div>
      <Modal
        style={{
          overlay: {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
          content: {
            color: "black",
            height: 675,
            width: 500,
            margin: "auto",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="modal-content">
          <h2>{props.name}</h2>
          <img src={props.url} alt="flag" className="modal-flag" />

          <div className="rows">
            <div className="info-type">
              <h5 className="text-right">Abbreviation</h5>
              <h5 className="text-right">Capital</h5>
              <h5 className="text-right">Dst</h5>
              <h5 className="text-right">Most Populous City</h5>
              <h5 className="text-right">Population</h5>
              <h5 className="text-right">Square Miles</h5>
              <h5 className="text-right">Time Zone 1</h5>
              <h5 className="text-right">Time Zone 2</h5>
            </div>
            <div className="info">
              <h5 className="text-left">{props.abbreviation}</h5>
              <h5 className="text-left">{props.capital}</h5>
              <h5 className="text-left">{props.dst}</h5>
              <h5 className="text-left">{props.most_populous_city}</h5>
              <h5 className="text-left">{props.population}</h5>
              <h5 className="text-left">{props.square_miles}</h5>
              <h5 className="text-left">{props.time_zone1}</h5>
              <h5 className="text-left">{props.time_zone2 || none}</h5>
            </div>
          </div>

          <button className="card-button" onClick={() => setModalIsOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
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
