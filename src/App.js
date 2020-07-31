import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

import "./styles/App.scss";

const App = () => {
  const [addItem, setAddItem] = useState([
    {
      title: "Refine Keep Clone",
      body: "Play with CSS",
    },
    {
      title: "Work on better buttons",
      body: "Research ways to do that, I have some ideas",
    },
    {
      title: "Keep playing with text",
      body:
        "I got longer entries to wrap and lengthen, sure took me a while, but it was really cool when I got it to work!",
    },
    {
      title: "CSS seems really important",
      body: "for creating a better UI/UX",
    },
    {
      title: "GitHub Pages",
      body:
        "is really cool, but I'm still confused on how to upload a project to SOTD and get it to function",
    },
  ]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <AddNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <NoteList
            key={index}
            id={index}
            title={val.title}
            body={val.body}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
