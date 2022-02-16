import React from "react";
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import moment from 'moment';

//styles
import useStyles from "./styles";
// ---
const Post = ({post,setCurrentId}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>

      {/* Creator name and time-ago was created */}
            <div className={classes.overlay}>
              <Typography variant="h5">{post.creator}</Typography>
              <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

      {/*EDIT dots  button */}
                <div className={classes.overlay2}>
                  <Button
                  className={classes.dots}
                   style={{color:'red'}} 
                   size="small" 
                   onClick={()=>setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="medium"/>
                  </Button>
                </div>

      {/* details */}
                      <div className={classes.details}>
                      <Typography variant="body2" >{post.tags.map((tag)=>`#${tag} `)}</Typography>
                      </div>

      {/* title */}
        <CardContent>
           <Typography className={classes.title} variant="h4" gutterBottom>{post.message}</Typography>
        </CardContent>

      {/* buttons like and delete */}
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={()=>{}}>
            <ThumbUpAltIcon fontSize="small"/>
            Like
             {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={()=>{}}>
            <DeleteIcon fontSize="small"/>
            Delete
          </Button>
        </CardActions>

    </Card>
  )
};

export default Post;
