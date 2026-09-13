import PropTypes from "prop-types";
const MediaRow = (props) => {
  const { item } = props;
  return (
    <tr key={item.media_id}>
      <td>
        <img src={item.thumbnail} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString("fi-FI")}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
    </tr>
  );
  MediaRow.PropTypes = {};
};
export default MediaRow;
