import { useState } from "react";
import Alert from "./Alert";

/**
 * form for signing up a user
 *
 * Props:
 * - signUp: parent function to call
 * - errors: any errors returned when attempting to register
 *
 * State:
 * - formData
 *
 * RoutesList --> SignupForm --> Alert
 */

const SIGNUP_INITIAL_DATA = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

function SignupForm({ signUp, errors }) {
  const [formData, setFormData] = useState(SIGNUP_INITIAL_DATA);

  /** Update Signup **/
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function */
  function handleSubmit(evt) {
    evt.preventDefault();
    signUp(formData);
    setFormData(SIGNUP_INITIAL_DATA);
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <label forhtml="username">Username</label>
      <input
        id="username"
        name="username"
        onChange={handleChange}
        value={formData.username}
      />
      <label forhtml="password">Password</label>
      <input
        id="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      <label forhtml="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <label forhtml="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <label forhtml="email">Email</label>
      <input
        id="email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      {errors && <Alert errors={errors} />}
      <button>Submit</button>
    </form>
  );
}

export default SignupForm;
