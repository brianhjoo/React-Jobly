import "./App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutesList from "./RoutesList";
import Nav from "./Nav";
import JoblyApi from "./api";
import userContext from "./userContext";

/** Controls the entire app
 *
 * Props:
 *  - none
 *
 * State:
 *  - user: Object containing the keys data, isLoading and errors
 *          {data: [{c1},...],
 *           isLoading: bool,
 *           errors: null}
 *  - token:
 *
 * App -> [Nav, RoutesList]
 */
function App() {
  const [user, setUser] = useState({
    data: null,
    isLoggedIn: false,
    isLoading: true,
    errors: null,
  });

  const [token, setToken] = useState(null);

  useEffect(
    function getUserOnTokenChange() {
      async function getUser() {
        try {              // TODO: get username from token with decode method and change function name to ex: fetchUser
          const res = await JoblyApi.getUser(token.username);
          setUser({
            data: res.user,
            isLoggedIn: true,
            isLoading: false,
            errors: null,
          });
        } catch (err) {
          setUser({
            data: null,
            isLoggedIn: false,
            isLoading: false,
            errors: err,
          });
        }
      }
      getUser();
    },
    [token]
  );

  const navigate = useNavigate();

  /** logs in user and gets token from API and sets token in state
   *
   * takes in:
   *  - username
   *  - password
   *
   * throws error if unauthorized
   */   // TODO: token change, token is just token. errors can now be set on user state
  async function login(username, password) {     // TODO: logIn (verby is better)
    // try {
      const token = await JoblyApi.getToken(username, password);
      setToken({
        token: token,
        username: username,
        isLoading: false,
        errors: null,
      });
      navigate("/");
    // } catch (err) {
      // setToken({
      //   token: null,
      //   isLoading: false,
      //   errors: err,
      // });
    // }
  }

  /** registers a new user
   *
   *  takes in:
   *    username, password, firstName, lastName, email
   *
   *  returns token and sets it in state
   */
  async function signUp({ username, password, firstName, lastName, email }) {
    try {
      const token = await JoblyApi.getSignupToken(
        username,
        password,
        firstName,
        lastName,
        email
      );
      setToken({ // TODO: fix set token
        token: token,
        username: username,
        isLoading: false,
        errors: null,
      });
      navigate("/");
    } catch (err) {
      setToken({
        token: null,
        isLoading: false,
        errors: err,
      });
    }
  }

  /** logs user out
   *
   *  sets user and token back to initial state
   */
  function logOut() {
    JoblyApi.token = '';

    setUser({
      data: null,
      isLoggedIn: false,
      isLoading: true,
      errors: null,
    });

    setToken({  // TODO: fix set token
      token: null,
      username: null,
      isLoading: true,
      errors: null,
    });
  }

  return (
    <userContext.Provider
      value={{
        isLoggedIn: user.isLoggedIn,
        firstName: user.data?.firstName,
      }}
    >
      <div className="App">
        <Nav
          isLoggedIn={user.isLoggedIn}
          logOut={logOut}
          username={user.data?.username}
        />
        <RoutesList
          login={login}
          user={user}
          loginErrors={token.errors}
          signUp={signUp}
          signUpErrors={token.errors}
        />
      </div>
    </userContext.Provider>
  );
}
export default App;
