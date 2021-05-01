const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  titleInput: {
    height: "50px",
    boxSizing: "border-box",
    border: "none",
    padding: "5px",
    fontSize: "24px",
    width: "calc(100% - 300px)",
    backgroundColor: "#374151",
    color: "white",
    paddingLeft: "20px",
    "@media only screen and (max-width: 600px)": {
      // display: "none",
      width: "100%",
      height: "50px",
      fontSize: "1.4rem",
      paddingLeft: "15px",
    },
  },
  editIcon: {
    position: "absolute",
    left: "380px",
    top: "45px",
    color: "white",
    width: "10",
    height: "10",
  },
  editorContainer: {
    height: "100%",
    boxSizing: "border-box",
    border: "5px solid white",
  },
});

export default styles;
