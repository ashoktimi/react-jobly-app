
import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import UserContext from "../auth/userContext";
import "./Navigation.css";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  function loggedInNav() {
    return(
      <ul>
          <Nav.Item>
            <NavLink to="/companies">Companies</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/jobs">Jobs</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/profile"> Profile </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/" onClick={logout}> Log out {currentUser.first_name || currentUser.username} </NavLink>
          </Nav.Item>
      </ul>
    )
  }

  function loggedOutNav(){
    return(
      <ul>
          <Nav.Item>
            <NavLink to="/login"> Login </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/signup"> Signup </NavLink>
          </Nav.Item>
      </ul>
    )
  }

  return (
    <div>
      <Navbar expand="md">
        <NavLink to='/'> Jobly </NavLink>
        {currentUser ? loggedInNav() : loggedOutNav()}
      </Navbar>
    </div>
  );
}

export default NavBar;