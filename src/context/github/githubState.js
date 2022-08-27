import react,{ Reducer, useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer"

import { SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_REPOS,


} from "../type";

const GithubState = (props) => {
    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading:false
    }
    const [state,dispatch] = useReducer(GithubReducer,initialState)

   
   
    //Set Loading
    const setLoading = () => dispatch({type: SET_LOADING})
   
    //Search users
    const searchUsers = async (text) => {
        setLoading()
       
        const res =
          await axios.get(`https://api.github.com/search/users?q=${text}&lient_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
       
        
       
       dispatch({
        type: SEARCH_USERS,
        payload:res.data.items
       })
      };
    

    //Get user 

    //Get Repos 

   

    return( <GithubContext.Provider 
        value ={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            searchUsers
        }}
         >
{props.children}
</GithubContext.Provider>) 

   
}
export default GithubState