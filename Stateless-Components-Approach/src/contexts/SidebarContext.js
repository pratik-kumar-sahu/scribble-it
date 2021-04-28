import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

function SidebarContextProvider(props) {
  const [addingNote, setAddingNote] = useState(false);
  const [title, setTitle] = useState(null);

  return (
    <SidebarContext.Provider
      value={{ addingNote, title, setTitle, setAddingNote }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
}

export default SidebarContextProvider;
