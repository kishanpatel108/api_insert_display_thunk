import { GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_ADD_NEW_USERS, GET_EDIT_USERS, GET_UPDATE_USER } from "../constants/userConstants";
import axios from "axios";

export const userAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST });
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch({ type: GET_USERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_USERS_FAIL, payload: error })
    }
}

export const createPost = (post) => async (dispatch) => {
    console.log("post",post);
    const result = await axios.post("https://jsonplaceholder.typicode.com/posts", post);
    console.log("result",result);
    dispatch({
        type: GET_ADD_NEW_USERS,
        // payload:result.data
        payload: {
            id: post.id,
            title: result.data.title,
            body: result.data.body,
        }
    })
}

export const editPost = (elem) => (dispatch) => {
    dispatch({
        type: GET_EDIT_USERS,
        payload: {
            id: elem.id,
            title: elem.title,
            body: elem.body
        }
    })
}

export const updatePost = (post) => async (dispatch) => {
    console.log("postid", post.id);

    try {
        const result = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,post)
        console.log("result", result);
        dispatch({
            type: GET_UPDATE_USER,
            payload: result.data
            // payload:{
            //     id:post.id,
            //     title:result.data.title,
            //     body:result.data.body,
            // }
        })
    } 
    catch (error) {
        console.log("error",error);
    }
}

