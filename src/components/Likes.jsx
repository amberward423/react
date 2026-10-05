import { useLike } from "../hooks/apiHooks.js";
import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext.jsx";

const Likes = ({ media_id }) => {
  const {
    postLike,
    deleteLike,
    getLikeCountByMediaId,
    getLikeByUser,
    getLikesByMediaAndUser,
  } = useLike();
  const { user } = useUserContext();
  console.log(user);

  const [likeCount, setLikeCount] = useState(0);
  const [userLike, setUserLike] = useState(null);
  useEffect(() => {
    const getLikes = async () => {
      console.log("GETTING LIKES");

      const result = await getLikeCountByMediaId(media_id);

      console.log("LIKE COUNT RESULT:", result);

      setLikeCount(result.count);

      if (user) {
        const all_likes = await getLikesByMediaAndUser(
          media_id,
          localStorage.getItem("token"),
        );
        console.log("ALL LIKES BY USER:", all_likes);
        if (all_likes.like_id) {
          setUserLike(all_likes);
        } else {
          setUserLike(null);
        }
      }
    };

    getLikes();
  }, [media_id, user]);
  console.log(userLike);

  return (
    <button
      onClick={async () => {
        if (userLike) {
          await deleteLike(userLike.like_id, localStorage.getItem("token"));
          setLikeCount(likeCount - 1);
          setUserLike(null);
        } else {
          await postLike(media_id, localStorage.getItem("token"));
          const all_likes = await getLikesByMediaAndUser(
            media_id,
            localStorage.getItem("token"),
          );
          if (all_likes.like_id) {
            setLikeCount(likeCount + 1);
          } else {
            setUserLike(null);
          }
        }
      }}
    >
      💖Likes💖: {likeCount}
    </button>
  );
};

export default Likes;
