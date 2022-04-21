import { useCallback, useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function EditDesk({ clearErrors, desk, deskId, submitDesk, titleUpdate }) {
  const [title, setTitle] = useState("");
  const ref = useRef();

  useEffect(() => {
    if (!deskId || !desk) return;

    setTitle(desk[deskId]?.title || "");
  }, [deskId, setTitle, desk]);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const update = useCallback((e) => {
    console.log(e.currentTarget.value);
    setTitle(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(`Submiting new Desk: ${title}, ${deskId}`);

      submitDesk({
        title: title,
        id: deskId,
      }).then(() => titleUpdate(false));

      setTimeout(() => clearErrors(), 5000);
    },
    [submitDesk, titleUpdate, clearErrors, deskId, title]
  );

  const pressEnter = useCallback((e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }, [title]);

  useOnClickOutside(ref, (e) => handleSubmit(e));

  return (
    <input
      type="text"
      value={title}
      onChange={(e) => update(e)}
      className="desk-edit-input"
      placeholder="New title"
      ref={ref}
      onKeyDown={pressEnter}
    />
  );
}

export default EditDesk;
