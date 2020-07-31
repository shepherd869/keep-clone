import React from "react";

const NoteList = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note-container">
        <div className="note-list">
          <h3> {props.title} </h3>
          <p> {props.body} </p>
          <button className="delete-btn" onClick={deleteNote}>
            <span role="img" aria-label="trash">
              🗑️
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NoteList;
