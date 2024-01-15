import classes from "./Modal.module.css";

function Modal({ children, changeModalVisibility, isVisible }) {
  return (
    <>
      <div className={classes.backdrop} onClick={changeModalVisibility} />
      <dialog open={isVisible} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
export default Modal;
