import useForm from "../hooks/formHooks.js";
import { useAuthentication } from "../hooks/apiHooks.js";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();

  const initValues = {
    username: "",
    password: "",
  };
  const { postLogin } = useAuthentication();

  const doLogin = async (inputs) => {
    console.log(inputs);
    const result = await postLogin(inputs);
    console.log(result);
    localStorage.setItem("token", result.token);

    navigate("/");
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues,
  );

  console.log(inputs);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
