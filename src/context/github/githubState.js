import {  useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer"

import { SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_REPOS,


} from "../type";

let githubClientId;
let githubClientSecret;
console.log("this is a"+process.env.NODE_ENV)
if(process.env.NODE_ENV !== 'production'){
    console.log("LOCAL")
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    githubClientSecret =  process.env.REACT_APP_GITHUB_CLIENT_SECRET
}else {
    console.log("PROD")
    githubClientId = process.env.GITHUB_CLIENT_ID
    githubClientSecret =  process.env.GITHUB_CLIENT_SECRET
}

const GithubState = (props) => {
    console.log("clientID"+githubClientId)
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
          await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
      ${githubClientId}&client_secret=
      ${githubClientSecret}`);
       
        
       
       dispatch({
        type: SEARCH_USERS,
        payload:res.data.items
       })
      };
    

    //Get user 
    const getUser = async (username) => {
        setLoading()
        const res =
          await axios.get(`https://api.github.com/users/${username}?client_id=
      ${githubClientId}&client_secret=
      ${githubClientSecret}`);
      
       // setUser(res.data)
        //setLoading(false)
        dispatch({
            type:GET_USER,
            payload:res.data
        })

      }

    //Get Repos 
    const getUserRepos = async (username)=> {
        setLoading(true)
        const res =
          await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
          ${githubClientId}&client_secret=
          ${githubClientSecret}`);
      
       
        dispatch({
            type:GET_REPOS,
            payload:res.data
        })
    
      }

   

    return( <GithubContext.Provider 
        value ={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            searchUsers,
            getUser
        }}
         >
{props.children}
</GithubContext.Provider>) 

   
}
export default GithubState