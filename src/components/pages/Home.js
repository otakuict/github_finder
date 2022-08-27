import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import Search from '../users/Search'
import Users from '../users/Users'

const Home = () => {
  return (
   <Fragment>
    <Search />
    <Users/>
   </Fragment>
  )
}

export default Home