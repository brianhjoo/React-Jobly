import Alert from "./Alert";
import { useState } from 'react';

/**
 * form for logging in user
 *
 * Props:
 * - login: parent function to call
 * - errors: any errors returned when attempting to log in
 *
 * State:
 * - formData
 *
 * RoutesList --> LoginForm --> Alert
 */

function LoginForm({ login, errors }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  /** Update login */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function */
  async function handleSubmit(evt) {
    evt.preventDefault();
    const { username, password } = formData;
    try {
      await login(username, password);  // TODO: handle the error in the form, have a piece of state with errors
    } catch(err) {
      setErrors(err);
    }
   // TODO: no need to clear form data, better user experience.
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label forhtml="username">Username</label>
      <input
        id="username"
        name="username"
        onChange={handleChange}
        value={formData.username}
      />
      <label forhtml="password">password</label>
      <input
        id="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      {errors && <Alert errors={errors} />}
      <button>Log In</button>
    </form>
  );
}

export default LoginForm;
