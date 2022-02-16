import React ,{useState}from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux';

//styles
import useStyles from "./styles";
// ---
import {createPost,updatePost} from '../../actions/posts'
const Form = ({currentId,setCurrentId}) => {
    const [postData,setPostData] = useState({
        creator:'',
        title:'',
        message:"",
        tags:'',
        selectedFile:''
    }) //inside of that empty object need to specify the properties that the object is gonna start with
  const dispatch = useDispatch();

  const classes = useStyles();

  //functions
  const handleSubmit = (e) => {
      //first of all,we have to say event that prevent default not to get the refresh in the browser
      e.preventDefault();

      if(currentId){

        dispatch(updatePost(currentId,postData))
      }else{

        //and the dispatch an action
        //this time it will be createPost,and now inside of there we going to pass all the data from our state posData
        dispatch(createPost(postData))
        console.log(postData);
        //once the data is dispatched,then we go to reducers
      }
  };

  const clear = ()=>{
    console.log('clear');
  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        // className={classes.form}
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory </Typography>
        <TextField
          //   className={classes.between}
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth={true}
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          //   className={classes.between}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth={true}
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          //   className={classes.between}
          name="message"
          variant="outlined"
          label="Message"
          fullWidth={true}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          //   className={classes.between}
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth={true}
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth={true}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth={true}
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
