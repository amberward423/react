import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        Switch
      </button>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </>
  );
};

export default Login;
