import MediaRow from "./MediaRow.jsx";
import SingleView from "./SingleView.jsx";
import { useState } from "react";
const Home = () => {
  const mediaArray = [
    {
      media_id: 8,
      user_id: 5,
      filename: "https://place-hold.it/1200x800.jpg&text=Pic1&fontsize=120",
      thumbnail: "https://placecats.com/300/200",
      filesize: 170469,
      media_type: "image/jpeg",
      title: "Picture 1",
      description: "This is a small and fluffy kitten.",
      created_at: "2024-01-07T20:49:34.000Z",
    },
    {
      media_id: 9,
      user_id: 7,
      filename: "https://place-hold.it/800x600.jpg&text=Pic2&fontsize=72",
      thumbnail: "https://placecats.com/300/200",
      filesize: 1002912,
      media_type: "image/jpeg",
      title: "Picture 2",
      description: "",
      created_at: "2024-01-07T21:32:27.000Z",
    },
    {
      media_id: 17,
      user_id: 2,
      filename:
        "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
      thumbnail: "https://placecats.com/300/200",
      filesize: 1236616,
      media_type: "image/jpeg",
      title: "Picture 3",
      description: "A sleeping cat.",
      created_at: "2024-01-07T20:48:13.000Z",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    selectedItem === null && (
      <>
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
                    item={item}
                    onSelect={(item) => {
                      setSelectedItem(item);
                    }}
                  />
                );
              })}
            </tbody>
          </table>
        </>
      </>
    )
      <SingleView selectedItem={selectedItem} />

  );
};

export default Home;
ex