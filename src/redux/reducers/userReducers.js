import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL, GET_ADD_NEW_USERS, GET_EDIT_USERS, GET_UPDATE_USER } from './../constants/userConstants';
const initialState = {
    list: [],
    // newEditData: {}
}

// const fid = (elem,action) =>{
//     if(elem.id && elem.id.length)
//     {
//         console.log("Id",elem.id);
//         return elem.id === action.payload.id
//     }
//     else {
//         console.log("newId",elem.newid);
//         return elem.newid === action.payload.newid
//     }

// }
export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                loading: true,
                list: []
            }
        case GET_USERS_SUCCESS:
            return {
                loading: false,
                list: action.payload
            }
        case GET_USERS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case GET_ADD_NEW_USERS:
            console.log("action.payload", action.payload);
            return {
                ...state,
                list: [action.payload,...state.list]

            }
          
        case GET_EDIT_USERS:
            const editItem =
                state.list.find((elem) => elem.id === action.payload.id)
            return {
                ...state,
                newEditData: editItem
            }
        case GET_UPDATE_USER:
            const newUpdateValue = state.list.map((elem) =>
            // elem.id === action.payload.id
            {
                if (elem.id === action.payload.id) {
                    elem = action.payload
                    return elem
                }
                return elem
            }
            )
            console.log("action.payload", action.payload);
            console.log("newUpdateValue+++", newUpdateValue);
            return {
                ...state, list: newUpdateValue,
            }
        default:
            return state
    }
}

