import { useLike } from "../hooks/apiHooks.js";
import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext.jsx";

const Likes = ({ media_id }) => {
  const { postLike, deleteLike, getLikeCountByMediaId, getLikeByUser } =
    useLike();
  const { user } = useUserContext();
  console.log(user);

  const [likeCount, setLikeCount] = useState(0);
  const [userLike, setUserLike] = useState(null);
  useEffect(() => {
    const getLikes = async () => {
      console.log("GETTING LIKES");

      const result = await getLikeCountByMediaId(media_id);

      console.log("LIKE COUNT RESULT:", result);

      setLikeCount(result.length);
    };

    getLikes();
  }, [media_id]);

  return <button>💖Likes💖: {likeCount}</button>;
};

export default Likes;
