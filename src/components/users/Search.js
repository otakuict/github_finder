import React,{useState} from 'react'
import PropTypes from  'prop-types' 
const Search = ({searchUsers,setAlert}) =>  {
    const [text,setText] = useState('')


    const onChange = e => setText(e.target.value)

    const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            setAlert('please enter Something','light')
        }else {
            searchUsers(text)
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
    searchUsers:PropTypes.func.isRequired,
    setAlert:PropTypes.func.isRequired
}

export default Search