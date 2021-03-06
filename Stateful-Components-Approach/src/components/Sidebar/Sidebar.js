import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Button } from "@material-ui/core";
import SidebarItem from "../Sidebaritem/Sidebaritem";

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      addingNote: false,
      title: null,
    };
  }

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
            {this.state.addingNote ? "Cancel" : "New Note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Give a short title"
                onKeyUp={(e) => this.updateTitle(e.target.value)}
              ></input>
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Save Note
              </Button>
            </div>
          ) : null}
          <List>
            {notes.map((note, index) => {
              return (
                <div key={index}>
                  <SidebarItem
                    note={note}
                    index={index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  ></SidebarItem>
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

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };

  updateTitle = (txt) => {
    this.setState({ title: txt });
  };

  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  };

  selectNote = (n, i) => this.props.selectNote(n, i);

  deleteNote = (note) => this.props.deleteNote(note);
}

export default withStyles(styles)(Sidebar);
