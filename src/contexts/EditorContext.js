import React, { createContext, useState } from "react";
import debounce from "../helpers";

export const EditorContext = createContext();

function EditorContextProvider(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState("");

  const updateBody = async (val) => {
    await setText(val);
    update();
  };

  const update = debounce(() => {
    console.log("updating DB");
  }, 1500);

  return (
    <EditorContext.Provider value={{ text, title, id, updateBody }}>
      {props.children}
    </EditorContext.Provider>
  );
}

export default EditorContextProvider;
