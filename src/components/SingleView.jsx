const SingleView = (props) => {
  const { setSelectedItem, item } = props;
  return (
    <>
      <dialog open={item !== null}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        {item.media_type === "image/jpeg" ? (
          <img src={item.filename} />
        ) : (
          <video src={item.filename} controls />
        )}
        <button onClick={() => setSelectedItem(null)}>Close</button>
      </dialog>
    </>
  );
};
export default SingleView;
