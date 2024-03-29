import { SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_REPOS,


} from "../type";

export default (state,action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false
            }
        case SET_LOADING:
            return{
                ...state,
                loading:true
            }
            case GET_USER: 
            return{
                 ...state,
            user: action.payload,
            loading:false  
        }
        default:
            return state; 
    }
}