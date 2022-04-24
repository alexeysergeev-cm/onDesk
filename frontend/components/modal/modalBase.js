import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./modal.scss";

function ModalBase({ modal, closeModal }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!!modal);
  }, [!!modal]);

  if (!modal) return null;

  const modalWithProps = React.cloneElement(modal, {
    closeModal,
  });

  return (
    <div
      class={classNames("modal", {
        "is-active": isActive,
      })}
    >
      <div class="modal-background" onClick={closeModal}></div>
      {modalWithProps}
    </div>
  );
}

export default ModalBase;
