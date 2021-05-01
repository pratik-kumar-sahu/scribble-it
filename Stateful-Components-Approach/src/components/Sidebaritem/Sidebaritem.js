import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../../helpers";
import { motion } from "framer-motion";

class SidebarItem extends Component {
  render() {
    const { index, note, classes, selectedNoteIndex } = this.props;

    return (
      <div key={index}>
        <ListItem
          style={{ position: "relative" }}
          className={classes.listItem}
          selected={selectedNoteIndex === index}
          alignItems="flex-start"
        >
          <div
            className={classes.textSection}
            onClick={() => this.selectNote(note, index)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 0.95 }}
            >
              <ListItemText
                primary={note.title}
                secondary={removeHTMLTags(note.body.substring(0, 30)) + "..."}
              ></ListItemText>
            </motion.div>
          </div>
          {selectedNoteIndex === index ? (
            <motion.div
              style={{ position: "absolute", top: "50%", left: "115%" }}
              animate={{ x: -53 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <DeleteIcon
                onClick={() => this.deleteNote(note)}
                className={classes.deleteIcon}
              ></DeleteIcon>
            </motion.div>
          ) : null}
        </ListItem>
      </div>
    );
  }

  selectNote = (n, i) => this.props.selectNote(n, i);

  deleteNote = (note) => {
    if (window.confirm(`Are you sure to delete 😱 ${note.title}?`)) {
      this.props.deleteNote(note);
    }
  };
}

export default withStyles(styles)(SidebarItem);
