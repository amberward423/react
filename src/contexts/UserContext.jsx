import { createContext, useState, useEffect } from "react";
import { useAuthentication, useUser } from "../hooks/apiHooks";
import { useNavigate } from "react-router";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { postLogin } = useAuthentication();
  const { user: apiUser, getUserByToken } = useUser();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserByToken();
    }
  }, []);
  useEffect(() => {
    setUser(apiUser);
  }, [apiUser]);

  const handleLogin = async (inputs) => {
    const result = await postLogin(inputs);
    localStorage.setItem("token", result.token);
    setUser(result.user);
    navigate("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
