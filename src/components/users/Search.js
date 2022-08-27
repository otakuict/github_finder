import React,{useContext, useState} from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
const Search = () =>  {
    const githubcontext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

   
    const [text,setText] = useState('')
   

    const onChange = e => setText(e.target.value)

    const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            alertContext.setAlert('please enter Something','light')
        }else {
            githubcontext.searchUsers(text)
            setText('');
        }
        
    }

  
    return (
      <div>
          <form onSubmit={onSubmit} className="form">
       
        <input 
        type="text" 
        name="text" 
        placeholder='Search User...'
        value={text}
        onChange={onChange}
        />
        <input type="submit"  value="Search" className='btn btn-dark btn-block'/>

          </form>

      </div>
    )
  
}



export default Search