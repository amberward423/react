import { fetchData } from "../utils/fetchData.js";
import { useState, useEffect } from "react";

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    fetchData(`${import.meta.env.VITE_MEDIA_API}/media`).then(async (data) => {
      const newArray = await Promise.all(
        data.map(async (item) => {
          const result = await fetchData(
            `${import.meta.env.VITE_AUTH_API}/users/${item.user_id}`,
          );
          return { ...item, username: result.username };
        }),
      );
      setMediaArray(newArray);
    });
  }, []);

  return mediaArray;
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      `${import.meta.env.VITE_AUTH_API}/auth/login`,
      fetchOptions,
    );
    return loginResult;
  };
  const postRegister = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };
    const registerResult = await fetchData(
      `${import.meta.env.VITE_AUTH_API}/users`,
      fetchOptions,
    );
    return registerResult;
  };
  return { postLogin, postRegister };
};

const useUser = () => {
  const [user, setUser] = useState(null);
  const getUserByToken = async () => {
    const token = localStorage.getItem("token");
    const fetchOptions = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const userresult = await fetchData(
      import.meta.env.VITE_AUTH_API + "/users/token",
      fetchOptions,
    );
    setUser(userresult);
  };
  return { user, getUserByToken };
};

export { useMedia, useAuthentication, useUser };
