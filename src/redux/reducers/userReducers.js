import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL, GET_ADD_USERS } from './../constants/userConstants';

export const userReducer=(state={users:[]},action)=>{
    // console.log("state",state.users);
    switch (action.type) {
        case GET_USERS_REQUEST :
            return{
                loading:true,
                users:[]
            }
        case GET_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload
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
               users:[action.payload,...state.users]
            }
        default:
            return state
    }
}

