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

export {useMedia}