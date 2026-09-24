import {useContext } from "react";
import {UserContext} from "../contexts/UserContext";

const Profile = () => {
   const {user} = useContext(UserContext);
  return (
    <>
      <h1>Profile</h1>
      <p>{user ? user.user.username : "Loading..."}</p>
      <p>{user ? user.user.email : "Loading..."}</p>
    </>
  );
};

export default Profile;
