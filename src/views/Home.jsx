import { fetchData } from "../utils/fetchData.js";
import MediaRow from "../components/MediaRow.jsx";
import { useState, useEffect } from "react";

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    fetchData(`${import.meta.env.VITE_MEDIA_API}/media`).then(async (data) => {
      const newArray = await Promise.all(data.map(async (item) => {
          const result = await fetchData(`${import.meta.env.VITE_AUTH_API}/users/${item.user_id}`);
          return { ...item, username: result.username };
        })
      );
      setMediaArray(newArray);
    });
  }, []);


  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => {
            return <MediaRow key={item.media_id} item={item} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
