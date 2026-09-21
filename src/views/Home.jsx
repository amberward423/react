import MediaRow from "../components/MediaRow.jsx";
const Home = () => {
  const mediaArray = [
    {
      media_id: 8,
      user_id: 5,
      filename:
        "https://images.pexels.com/photos/34388974/pexels-photo-34388974.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/34388974/pexels-photo-34388974.jpeg",
      filesize: 170469,
      media_type: "image/jpeg",
      title: "Picture 1",
      description: "Sleepy cat",
      created_at: "2024-01-07T20:49:34.000Z",
    },
    {
      media_id: 9,
      user_id: 7,
      filename:
        "https://images.pexels.com/photos/18001795/pexels-photo-18001795.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/18001795/pexels-photo-18001795.jpeg",
      filesize: 1002912,
      media_type: "image/jpeg",
      title: "Picture 2",
      description: "Adventurous cat",
      created_at: "2024-01-07T21:32:27.000Z",
    },
    {
      media_id: 17,
      user_id: 2,
      filename: "https://www.pexels.com/download/video/37957099/",
      thumbnail: "https://www.pexels.com/download/video/37957099/",
      filesize: 1236616,
      media_type: "video/mp4",
      title: "Picture 3",
      description: "Kitten",
      created_at: "2024-01-07T20:48:13.000Z",
    },
  ];


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
            return (
              <MediaRow
                key={item.media_id}
                item={item}
              />
            );
          })}
        </tbody>
      </table> 
    </>
  );
};

export default Home;
