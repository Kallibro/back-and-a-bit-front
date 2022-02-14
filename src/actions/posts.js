import * as api from '../api'

//Action Creators
//action creators are function that returns actions
export const getPosts = ()=> async(dispatch)=>{
    try {
        //going to try  fetch data from the api
        //we are first getting the response from tha api
        //and then in the response we always have the data object which we're returning from the backend,
        //and then we have data and basically data represents the posts
const {data}= await api.fetchPosts();

dispatch({type: 'FETCH_ALL',payload:data})


    } catch (e) {
        console.log(e.message);
    }
};
//redux tank redux allows us to in here an addition arrow function,the syntax is crazy,but need to this



export const createPost = (post) => async  (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type:'CREATE',payload:data});
    } catch (e) {
        console.log("Actions",e.message);
    }
}