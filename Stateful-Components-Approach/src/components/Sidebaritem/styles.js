const styles = (theme) => ({
  listItem: {
    cursor: "pointer",
    border: "1px solid #374151",
    borderRadius: "8px",
    marginBottom: ".5rem",
  },
  textSection: {
    maxWidth: "85%",
  },
  deleteIcon: {
    position: "absolute",
    right: "5px",
    top: "calc(50% - 15px)",
    "&:hover": {
      color: "#DB2777",
    },
  },
});

export default styles;
