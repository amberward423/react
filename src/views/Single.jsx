import { useLocation, useNavigate } from "react-router";
import Likes from "../components/Likes.jsx";

const Single = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const item = location.state.item;

  return (
    <>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{item.username}</p>

      {item.media_type === "image/jpeg" ? (
        <img src={item.filename} />
      ) : (
        <video src={item.filename} controls />
      )}
      <Likes media_id={item.media_id} />
      <button
        className="px-4 py-2 rounded bg-pink-400 text-black hover:bg-pink-200"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </>
  );
};

export default Single;
