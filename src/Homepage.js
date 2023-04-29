import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";

/** Homepage
 *
 * Props: none
 *
 * State: none
 *
 * App --> RoutesList --> Homepage
 */
function Homepage() {
  const { firstName, isLoggedIn } = useContext(userContext);

  return (
    <div className="Homepage">
      <h3>Jobly</h3>
      <p>All the jobs in one, convenient place.</p>
      {
        !isLoggedIn
          ?
          <div>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
          :
          <h4>{`Welcome Back, ${firstName}!`}</h4>
      }
    </div>
  );
}

export default Homepage;
