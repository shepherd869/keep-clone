import React, { useState } from "react";

const AddNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({});
  };

  const expandBox = () => {
    setExpand(true);
  };
  const retractBox = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="notes">
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}

          <textarea
            rows="3"
            column="auto"
            name="body"
            value={note.body}
            onChange={InputEvent}
            placeholder="Take a note..."
            onClick={expandBox}
            onDoubleClick={retractBox}
          ></textarea>
        </form>
        {expand ? (
          <button onClick={addEvent} className="add-btn">
            <span role="img" aria-label="add button">
              ➕
            </span>
          </button>
        ) : null}
      </div>
    </>
  );
};

export default AddNote;
