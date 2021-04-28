import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import debounce from "../../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import EditorContextProvider, {
  EditorContext,
} from "../../contexts/EditorContext";

function Editor(props) {
  const { text, title, id, updateBody } = useContext(EditorContext);
  const { classes } = props;

  return (
    <div className={classes.editorContainer}>
      <ReactQuill value={text} onChange={() => updateBody()} />
    </div>
  );
}

export default withStyles(styles)(Editor);
