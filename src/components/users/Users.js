import React, { useContext } from 'react'
import UserItem from './UserItem'
import  Spinner  from '../layout/Spinner'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

const Users =()=> {
    const githubContext = useContext(GithubContext)

    const {loading,users} = githubContext //decalre here and pull it  from context instead of get from porps directly

   if(loading){ // Can use githubContext.loading (if not declared at above)
       return <Spinner/>
   }
   else{
    return (
        <div style={userStyle}>
            {users.map(user=>(
               <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
   }
 
    
}

 

const userStyle ={
    display:"grid",
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
    
}
export default Users
