import react,{ Reducer, useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer"

import { SEARCH_USERS,
    SET_ALERT,
    REMOVE_ALERT
    


} from "../type";

const AlertState = (props) => {
    const initialState = null
    const [state,dispatch] = useReducer(AlertReducer,initialState)

   
   //set Alert
   const setAlert = (msg, type) => {
   
    dispatch({
        type:SET_ALERT,
        payload:{msg,type}
    })
    setTimeout(() => {dispatch({type:REMOVE_ALERT }) }, 5000);
  };
   

    return( <AlertContext.Provider 
        value ={{
           alert:state,
           setAlert
        }}
         >
{props.children}
</AlertContext.Provider>) 

   
}
export default AlertState