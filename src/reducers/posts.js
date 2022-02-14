

//what are reducers?
//reducers is a function,that accepts the state and the action
//in reducers the state always equals to something,
//we cant leave it equal to nothing,that why we need to set it initial value
//our post will be an array,and that is why we specifying this empty array there
//and for simplify things,our 'state' will be named as 'posts'
export default (posts = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
        return action.payload;

        case 'CREATE':
            //we have to send over an array of posts
            //first of all,we have to spread all the posts
            //and then we have to add a new post
            //and that new post is stored in the action.payload
            return [...posts,action.payload];

        default:
            return posts;
    }
}

