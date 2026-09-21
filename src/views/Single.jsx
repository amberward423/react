import { useLocation, useNavigate } from "react-router";

const Single = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const item = location.state.item;

  return (
    <>
      <h2>{item.title}</h2>
      <p>{item.description}</p>

      {item.media_type === "image/jpeg" ? (
        <img src={item.filename} />
      ) : (
        <video src={item.filename} controls />
      )}

      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default Single;
