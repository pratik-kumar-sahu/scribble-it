import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import { SidebarContext } from "../../contexts/SidebarContext";
import { AppContext } from "../../contexts/AppContext";
import Sidebaritem from "../Sidebaritem/Sidebaritem";

function Sidebar(props) {
  const { addingNote, setAddingNote, title, setTitle } = useContext(
    SidebarContext
  );
  const { classes } = props;
  const { notes, selectedNoteIndex, selecteNote } = useContext(AppContext);

  const newNoteBtnClick = () => {
    setAddingNote(!addingNote);
    setTitle(null);
  };

  const updateTitle = async (txt) => {
    setTitle(txt);
    console.log("here its ", txt);
  };

  const newNote = () => {
    console.log(title, addingNote);
  };

  const selectNote = (note, index) => {
    selecteNote(note, index);
  };

  const deleteNote = () => {
    console.log("delete note");
  };

  if (notes) {
    return (
      <div className={classes.sidebarContainer}>
        <Button onClick={newNoteBtnClick} className={classes.newNoteBtn}>
          {addingNote ? "Cancel" : "New Note"}
        </Button>
        {addingNote ? (
          <div>
            <input
              type="text"
              className={classes.newNoteInput}
              placeholder="Enter Note Title"
              onKeyUp={(e) => updateTitle(e.target.value)}
            />
            <Button className={classes.newNoteSubmitBtn} onClick={newNote}>
              Submit Note
            </Button>
          </div>
        ) : null}
        <List>
          {notes.map((note, index) => {
            return (
              <div key={index}>
                <Sidebaritem
                  note={note}
                  index={index}
                  selectedNoteIndex={selectedNoteIndex}
                  selectNote={selectNote}
                  deleteNote={deleteNote}
                />
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default withStyles(styles)(Sidebar);
