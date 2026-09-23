import { useEffect } from "react";
import { useUser } from "../hooks/apiHooks.js";

const Profile = () => {
  const { user, getUserByToken } = useUser();
  console.log(user);
  useEffect(() => {
    getUserByToken();
  }, []);
  return (
    <>
      <h1>Profile</h1>
      <p>{user ? user.user.username : "Loading..."}</p>
      <p>{user ? user.user.email : "Loading..."}</p>
    </>
  );
};

export default Profile;
