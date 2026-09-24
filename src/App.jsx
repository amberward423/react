import "./App.css";
import Home from "./views/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Profile from "./views/Profile.jsx";
import Upload from "./views/Upload.jsx";
import Single from "./views/Single.jsx";
import Login from "./views/Login.jsx";
import Logout from "./views/Logout.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="upload" element={<Upload />} />
            <Route path="single" element={<Single />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
