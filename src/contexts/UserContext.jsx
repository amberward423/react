import { createContext, useState } from "react";
import { useAuthentication } from "../hooks/apiHooks";
import { useNavigate } from "react-router";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { postLogin } = useAuthentication();

  const handleLogin = async (inputs) => {
    const result = await postLogin(inputs);
    localStorage.setItem("token", result.token);
    setUser(result.user);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user,handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext};
