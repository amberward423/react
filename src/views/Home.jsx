import { fetchData } from "../utils/fetchData.js";
import MediaRow from "../components/MediaRow.jsx";
import { useState, useEffect } from "react";

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    fetchData("/test.json").then((data) => {
      setMediaArray(data);
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
