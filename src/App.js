import React,{useEffect,useState} from "react";
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import { useDispatch } from "react-redux";
// ---
//components
import Form from './components/Form/Form.js'
import Posts from './components/Posts/Posts.js'
import {getPosts} from './actions/posts'
//styles
import memories from "./images/memories.jpg"
import useStyles from './styles'

// ---
const App = ()=>{
  const [currentId,setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])
    return (
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center" id="myFunny">
            Capturing life's moments and keeping them
          </Typography>
          <img
            src={memories}
            alt="memories"
            className={classes.image}
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>

              <Grid item xs={12} sm={4}>
                <Form currentId = {currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    );
}

export default App;