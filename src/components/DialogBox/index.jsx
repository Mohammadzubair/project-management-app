import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { PropTypes } from "prop-types";
import Button from "../Button";

const DialogBox = forwardRef(function DialogBox({ children, buttonText }, ref) {
  const dialogBox = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogBox.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md m-auto"
      ref={dialogBox}
    >
      {children}
      <form className="mt-4 text-right" method="dialog">
        <Button>{buttonText}</Button>
      </form>
    </dialog>,
    document.getElementById("root")
  );
});

export default DialogBox;

DialogBox.propTypes = {
  children: PropTypes.node,
  buttonText: PropTypes.string,
};
