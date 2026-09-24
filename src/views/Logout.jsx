import { UserContext } from "../contexts/UserContext.jsx";
import { useContext } from "react";

const Logout = () => {
  const { handleLogout } = useContext(UserContext);

  return (
    <>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
