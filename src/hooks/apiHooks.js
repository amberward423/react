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

const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();
    formData.append("file", file);
    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    };
    const uploadResult = await fetchData(
      `${import.meta.env.VITE_UPLOAD_SERVER}/upload`,
      fetchOptions,
    );
    return uploadResult;
  };
  return { postFile };
};
const deleteMedia = async (media_id, token) => {
  const fetchOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const deleteResult = await fetchData(
    `${import.meta.env.VITE_MEDIA_API}/media/${media_id}`,
    fetchOptions,
  );
  return deleteResult;
};
const modifyMedia = async (media_id, data, token) => {
  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  };
  const modifyResult = await fetchData(
    `${import.meta.env.VITE_MEDIA_API}/media/${media_id}`,
    fetchOptions,
  );
  return modifyResult;
};
const useLike = () => {
  const postLike = async (media_id, token) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        media_id: media_id,
      }),
    };
    const mediaResult = await fetchData(
      `${import.meta.env.VITE_MEDIA_API}/likes`,
      fetchOptions,
    );
    return mediaResult;
  };

  const deleteLike = async (like_id, token) => {
    const fetchOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const mediaResult = await fetchData(
      `${import.meta.env.VITE_MEDIA_API}/likes/${like_id}`,
      fetchOptions,
    );
    return mediaResult;
  };
  const getLikeCountByMediaId = async (media_id) => {
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const mediaResult = await fetchData(
      `${import.meta.env.VITE_MEDIA_API}/likes/count/${media_id}`,
      fetchOptions,
    );
    return mediaResult;
  };

  const getLikeByUser = async (user_id, token) => {
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const mediaResult = await fetchData(
      `${import.meta.env.VITE_MEDIA_API}/likes/byuser/${user_id}`,
      fetchOptions,
    );
    return mediaResult;
  };

  const getLikesByMediaAndUser = async (media_id, token) => {
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const likes_result = await fetchData(
      `${import.meta.env.VITE_MEDIA_API}/likes/bymedia/user/${media_id}`,
      fetchOptions,
    );
    return likes_result;
  };
  return {
    postLike,
    deleteLike,
    getLikeCountByMediaId,
    getLikeByUser,
    getLikesByMediaAndUser,
  };
};

export {
  useMedia,
  useAuthentication,
  useUser,
  useFile,
  deleteMedia,
  modifyMedia,
  useLike,
};
