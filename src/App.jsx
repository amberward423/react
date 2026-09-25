import "./App.css";
import Home from "./views/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Profile from "./views/Profile.jsx";
import Upload from "./views/Upload.jsx";
import Single from "./views/Single.jsx";
import Login from "./views/Login.jsx";
import Logout from "./views/Logout.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="upload" element={<Upload />} />
        <Route path="single" element={<Single />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="upload" element={<Upload />} />


      </Route>
    </Routes>
  );
};

export default App;
