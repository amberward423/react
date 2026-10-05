import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <button
        className="px-4 py-2 rounded bg-pink-400 text-black hover:bg-pink-200"

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
