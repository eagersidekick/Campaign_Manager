function Modal({ children, onClose }) {
    return (
      <div className="modal is-active">
        {/* makes the modal text easier to read against a dark background */}
        <div className="modal-text modal-background" onClick={onClose}></div>
        <div className="modal-text modal-content">
          {children}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
      </div>
    );
  }
export default Modal;