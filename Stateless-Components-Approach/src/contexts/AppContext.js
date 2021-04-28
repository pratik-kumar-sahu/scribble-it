import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider(props) {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);

  const selecteNote = (note, index) => {
    setSelectedNoteIndex(index);
    setSelectedNote(note);
  };

  const noteUpdate = (id, noteObj) => {
    console.log(id, noteObj);
  };

  return (
    <AppContext.Provider
      value={{
        selectedNoteIndex,
        selectedNote,
        notes,
        setNotes,
        selecteNote,
        noteUpdate,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
