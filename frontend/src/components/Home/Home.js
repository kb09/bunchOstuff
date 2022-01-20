import React, {useState, useEffect} from "react";
import { Grid, Container, Grow, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { getPosts } from "../../actions/posts";
import { useHistory, useLocation } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';
import ChipInput from 'material-ui-chip-input';






const Home = () => {
  const classes = useStyles();

  const [tags, setTags] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) { //enter key 13
      searchAd();//search for an ad
    }
  };

  const searchAd = () => {
    if (search.trim() || tags) {
      //dispatch => fetch search ads
    } else {
      history.push('/');
    }
  };
  
  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
   <div className="background">

    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
              <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Ads" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
                <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              />
               <Button onClick={searchAd} className={classes.searchButton} variant="contained" color="primary">Search</Button>
              </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
    
      </Container>
    </Grow>

    </div>
  );
};






export default Home;