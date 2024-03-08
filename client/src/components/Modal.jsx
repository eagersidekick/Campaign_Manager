function Modal({ children, onClose }) {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={onClose}></div>
        <div className="modal-content">
          {children}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
      </div>
    );
  }
export default Modal;