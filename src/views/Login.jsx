import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState, useContext } from "react";
import {UserContext} from "../../contexts/UserContext.jsx";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {handleLogin} = useContext(UserContext);

  return (
    <>
    
      <button
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        Switch
      </button>
      {isLogin ? <LoginForm handleLogin= {handleLogin} /> : <RegisterForm />}
    </>
  );
};

export default Login;
