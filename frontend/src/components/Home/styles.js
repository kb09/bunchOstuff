import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    marginBottom: "1rem",
    padding: "16px",
    backgroundColor: "#e4e6f3",
    borderRadius: "10px", ///////
    marginTop: "60px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  searchButton: {
    // boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)", /////////////
    color: "#000",
    backgroundColor: "#99a1d1",
    // opacity: 0.5,
    alignItems: "center",
    marginLeft: "10px",
    height: "52px",
    width: "300px",
    fontSize: "18px",
  },
  pages: {
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor: "#e4e6f3",
    padding: "10px",
  },
  searchAd: {
    marginRight: "10px",
    width: "300px",
  },

  searchTag: {
    width: "300px",
  },
}));
