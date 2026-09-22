import { useEffect } from "react";
import { useUser } from "../hooks/apiHooks.js";

const Profile = () => {
  const { user, getUserByToken } = useUser();
  useEffect(() => {
    getUserByToken();
  }, []);

  return <h1>Profile</h1>;
};

export default Profile;
