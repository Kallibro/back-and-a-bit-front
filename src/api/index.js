import axios from 'axios'

//returns all the posts that we have in database
const url = "http://localhost:5000/posts";

//will use it in other file,so export it
export const fetchPosts = ()=> axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost)=> axios.patch(`${url}/${id}`,updatedPost);