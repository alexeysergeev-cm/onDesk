import { useCallback, useEffect, useState, useRef } from "react";
import { debounce } from "lodash";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useEventListener } from "../../hooks/useEventListener";

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
      console.log("submiting new Desk title");
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
  }, []);

  useOnClickOutside(ref, (e) => handleSubmit(e));
  // useEventListener("keydown", pressEnter);

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
