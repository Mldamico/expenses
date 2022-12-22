interface Props {
  onClose: React.MouseEventHandler | React.MouseEventHandler;
  children: JSX.Element | JSX.Element[];
}

function Modal({ children, onClose }: Props) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <dialog
        className="modal"
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
