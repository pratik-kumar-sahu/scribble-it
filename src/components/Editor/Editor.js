import React, { useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import debounce from "../../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import EditorContextProvider, {
  EditorContext,
} from "../../contexts/EditorContext";
import { AppContext } from "../../contexts/AppContext";

function Editor(props) {
  const { text, setText, title, setTitle, id, setId, updateBody } = useContext(
    EditorContext
  );
  const { selectedNote, noteUpdate } = useContext(AppContext);
  const { classes } = props;

  useEffect(() => {
    console.log(selectedNote);
    setText(selectedNote.body);
    setTitle(selectedNote.title);
    setId(selectedNote.id);
  });

  useEffect(() => {
    if (selectedNote.id !== id) {
      setText(selectedNote.body);
      setTitle(selectedNote.title);
      setId(selectedNote.id);
    }
  });

  return (
    <div className={classes.editorContainer}>
      <ReactQuill value={text} onChange={() => updateBody()} />
    </div>
  );
}

export default withStyles(styles)(Editor);
