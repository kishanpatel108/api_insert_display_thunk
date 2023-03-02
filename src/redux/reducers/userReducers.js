import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL, GET_ADD_USERS } from './../constants/userConstants';
const initialState={
    list:[]
}
export const userReducer=(state=initialState,action)=>{
    // console.log("state",state.users);
    switch (action.type) {
        case GET_USERS_REQUEST :
            return{
                loading:true,
                list:[]
            }
        case GET_USERS_SUCCESS:
            return{
                loading:false,
                list:action.payload
            }
        case GET_USERS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case GET_ADD_USERS:
            console.log(action.payload);
            return{
                ...state,
                list:[action.payload,...state.list]
            }
        default:
            return state
    }
}

