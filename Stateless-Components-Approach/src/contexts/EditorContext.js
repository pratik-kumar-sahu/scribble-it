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

  const update = debounce(() => {}, 1500);

  return (
    <EditorContext.Provider
      value={{ text, setText, title, setTitle, id, setId, updateBody }}
    >
      {props.children}
    </EditorContext.Provider>
  );
}

export default EditorContextProvider;
