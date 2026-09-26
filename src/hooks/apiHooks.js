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
  const postMedia = async (file, inputs, token) => {
    const media = {
      title: inputs.title,
      description: inputs.description,
      filename: file.data.filename,
      filesize: file.data.filesize,
      media_type: file.data.media_type,
    };
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(media),
    };
    const mediaResult = await fetchData(
      `${import.meta.env.VITE_MEDIA_API}/media`,
      fetchOptions,
    );
    return mediaResult;
  };

  return { mediaArray, postMedia };
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
}
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

export { useMedia, useAuthentication, useUser,useFile, deleteMedia, modifyMedia };
