import "./Modal.css";

export const Modal = ({ showModal, setShowModal }) => {
  return showModal ? (
    <div className="background">
      <div className="modal-wrapper">Modal</div>
    </div>
  ) : (
    <div></div>
  );
};
