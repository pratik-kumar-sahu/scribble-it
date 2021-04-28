import React, { useContext, useEffect } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import Sidebar from "./components/Sidebar/Sidebar";
import { AppContext } from "./contexts/AppContext";
import EditorContextProvider from "./contexts/EditorContext";
import SidebarContextProvider from "./contexts/SidebarContext";
import { invokeFirestore } from "./firebase";

function App() {
  const { selectedNoteIndex, selectedNote, notes, setNotes } = useContext(
    AppContext
  );

  useEffect(() => {
    invokeFirestore.collection("notes").onSnapshot((snapshot) => {
      const getNotes = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      setNotes(getNotes);
      console.log(notes);
    });
  }, []);

  return (
    <div className="app-container">
      <SidebarContextProvider>
        <EditorContextProvider>
          <Sidebar />
          {selectedNote ? <Editor /> : null}
        </EditorContextProvider>
      </SidebarContextProvider>
    </div>
  );
}

export default App;
