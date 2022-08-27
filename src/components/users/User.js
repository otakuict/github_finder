import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import GithubContext from '../../context/github/githubContext'

const User = () => {
  const githubContext = useContext(GithubContext)


  const {getUser,user} = githubContext


      let { login } = useParams(); 
 useEffect(() => {
 
getUser(login);
//getRepos(login)

 },[])// eslint-disable-line react-hooks/exhaustive-deps
 

  return (
    <Fragment>
        
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{""}
      {user.hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={user.avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
        </div> 
        <div>
            {user.bio &&(<Fragment>
                    <h3>bio</h3>
                    <p>{user.bio}</p>
                </Fragment>
                )}
                <a href={user.html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                <ul>
                    <li>
                        {user.login && <Fragment>
                                <strong>Username:</strong> {user.login}
                            </Fragment>}
                    </li>
                    <li>
                        {user.company && <Fragment>
                                <strong>Company:</strong> {user.company}
                            </Fragment>}
                    </li>
                    <li>
                        {user.blog && <Fragment>
                                <strong>Website:</strong> {user.blog}
                            </Fragment>}
                    </li>
                </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
