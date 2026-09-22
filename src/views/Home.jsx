import MediaRow from "../components/MediaRow.jsx";
import { useMedia } from "../hooks/apiHooks.js";
const Home = () => {
  const mediaArray = useMedia();
  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Username</th>
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
