
/** Error alert message
 *
 * Props:
 *  - errors: any errors caught when attempting API calls.
 *
 * State:
 *  - none
 *
 * [LoginForm, SignupForm, ProfileForm] --> Alert
 */
function Alert({ errors }) {
  return (
    <div className='Alert'>
      {errors.map((e, i) => <p key={i}>{e}</p>)}
    </div>
  );
}


export default Alert;