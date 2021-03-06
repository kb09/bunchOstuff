import React, { useState } from "react";
import {
  Grid,
  Container,
  Grow,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../actions/posts";

import { useNavigate, useLocation } from "react-router-dom";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";
import ChipInput from "material-ui-chip-input";

import Pagination from "../Pagination";
// import { mergeClasses } from "@material-ui/styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();

  const [tags, setTags] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();
  const page = query.get("page") || 1;



  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") })); //dispatch => fetch search posts
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.target.value) {
      searchPost();
    } else {
      navigate("/")
    }
    // if (e.keyCode === 13) {
    //   //enter key = 13
    //   searchPost(); //search for a post
    // }
  };


  

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
    <div className="background">
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            className={classes.gridContainer}
          >
            {/* Search Bar :: */}
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                className={classes.searchAd}
                // onKeyPress={handleKeyPress}
                onKeyUp={handleKeyPress}
                name="search"
                variant="outlined"
                label="Search Ads"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ChipInput
                className={classes.searchTag}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                variant="outlined"
                label="Search Tags"
              />
              <Button
                className={classes.searchButton}
                onClick={searchPost}
                variant="contained"
                // color="primary"
              >
                Search
              </Button>
            </AppBar>

            <Grid item xs={12} sm={6} md={3}>
              {/* Form :: */}
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>

            {/* Cards :: */}
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>

          {/* pages */}
          <Paper className={classes.pages} elevation={6}>
            <Pagination page={page} />
          </Paper>
        </Container>
      </Grow>
    </div>
  );
};

export default Home;
