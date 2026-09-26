import { Link, useNavigate} from "react-router";
import { useUserContext } from "../contexts/UserContext.jsx";
import { deleteMedia, modifyMedia } from "../hooks/apiHooks.js";

const MediaRow = (props) => {
  const { item } = props;
  const user = useUserContext();
  const navigate = useNavigate()

  console.log(user);
  return (
    <tr key={item.media_id}>
      <td>
        <img src={item.thumbnail} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>
      <td>{new Date(item.created_at).toLocaleString("fi-FI")}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>

      <td>
        <Link to="/single" state={{ item }}>
          Show
        </Link>{" "}
        {user &&
          (user.user.user_id === item.user_id ||
            user.user.level_name === "Admin") && (
            <>
              <button
                className="px-2 py-1 rounded bg-pink-200 text-black"
                onClick={async () => {
                  const data = { title: "Updated Title", description: "Updated Description" };
                  const token = localStorage.getItem("token")
                  await modifyMedia(item.media_id, data, token);
                  navigate("/")
                }}
              >
                Modify
              </button>
              <button
                className="px-2 py-1 rounded bg-pink-200 text-black"
                onClick={async () => {
                  const token = localStorage.getItem("token")
                  await deleteMedia(item.media_id, token);
                  navigate("/")
                }}
              >
                Delete
              </button>
            </>
          )}
      </td>
    </tr>
  );
};
export default MediaRow;
