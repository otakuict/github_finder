
import { useParams } from 'react-router-dom';
import {useEffect} from 'react';
import React from 'react'

function User(props) {
   
    const { login } = useParams();
    props.getUser(login)

    useEffect(() => {
       console.log("test"+login)
    }, []);

    // const {
    //     name,
    //     avatar_url,
    //     location,
    //     bio,
    //     blog,
    //     login,
    //     html_url,
    //     followers,
    //     following,
    //     public_repos,
    //     public_gists,
    //     hireable
    // } = props.user;

  return (
    <div>User</div>
  )
}

export default User


