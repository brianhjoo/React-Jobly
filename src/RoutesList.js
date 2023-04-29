import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/** Routes to all components
 *
 * Props:
 *  - user: user object
 *  - login: parent function to call
 *  - signUp: parent function to call
 *  - loginErrors: any errors returned when logging in
 *  - signUpErrors: any errors returned when registering
 *
 * State:
 *  - none
 *
 * App --> RoutesList
 *
 */
function RoutesList({
  login,
  signUp,
  user,
  loginErrors,
  signUpErrors,
}) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:company" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route
        path="/login"
        element={<LoginForm login={login} errors={loginErrors} />}
      />
      <Route
        path="/signup"
        element={<SignupForm signUp={signUp} errors={signUpErrors} />}
      />
      <Route
        path="/profile"
        element={<ProfileForm user={user} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
