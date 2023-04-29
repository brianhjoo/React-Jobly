import React from "react";
import { Link } from "react-router-dom";

/** navigation menu
 *
 * props:
 *  - isLoggedIn: true/false whether or not user is logged in
 *  - logOut: parent function to call
 *  - username: logged in user's username
 *
 * state:
 *  - none
 *
 * App -> Nav
 *
 */
function Nav({ isLoggedIn, logOut, username }) {

  return (
    <div className="Nav">
      <Link to="/">Jobly</Link>
      {isLoggedIn ? (
        <>
          <Link to="/companies">Companies</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/" onClick={logOut} >Logout {username}</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
}

export default Nav;
