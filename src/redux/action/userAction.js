import { GET_ADD_USERS, GET_USERS_FAIL,GET_USERS_REQUEST,GET_USERS_SUCCESS } from "../constants/userConstants";
import axios from "axios";

export const userAction = () => async(dispatch)=>{
    try {
        dispatch({type:GET_USERS_REQUEST});
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch({type:GET_USERS_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:GET_USERS_FAIL,payload:error})
    }
}

export const createPost = (post) => async(dispatch)=> {
        const result = await axios.post("https://jsonplaceholder.typicode.com/posts",post);
        dispatch({
            type:GET_ADD_USERS,
            // payload:result.data
            payload:{
                id:post.id,
                title:result.data.title,
                body:result.data.body,
            }
        })
}