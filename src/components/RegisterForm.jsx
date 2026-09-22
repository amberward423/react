import useForm from "../hooks/formHooks.js";
import { useAuthentication } from "../hooks/apiHooks.js";
const RegisterForm = () => {
  const initValues = {
    username: "",
    password: "",
    email: "",
  };
  const doRegister = (inputs) => {
    console.log(inputs);
  };
  const { inputs, handleInputChange, handleSubmit } = useForm(
    doRegister,
    initValues,
  );

  const { postRegister } = useAuthentication();
  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="registeremail">Email</label>
          <input
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
