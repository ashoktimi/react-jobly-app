import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import UserContext from "../auth/userContext";
import './Homepage.css'

const Home = () =>{
    const { currentUser } = useContext(UserContext);
    
    return(
    <div className="Homepage">
    <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        {currentUser ?
        <h1>Welcome Back, {currentUser.firstName || currentUser.username}</h1>
      :(
        <p>
        <Link className="btn btn-primary font-weight-bold mr-3"
              to="/login">
          Log in
        </Link>
        <Link className="btn btn-primary font-weight-bold"
              to="/signup">
          Sign up
        </Link>
      </p>
      )  
    }
    </div>
    </div>
    )
}

export default Home;