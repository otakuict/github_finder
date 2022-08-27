import React,{useContext, useState} from 'react'
import PropTypes from  'prop-types' 
import GithubContext from '../../context/github/githubContext'
const Search = ({setAlert}) =>  {
    const githubcontext = useContext(GithubContext)

    const [text,setText] = useState('')
   

    const onChange = e => setText(e.target.value)

    const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            setAlert('please enter Something','light')
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

Search.propTypes = {
  
    setAlert:PropTypes.func.isRequired
}

export default Search