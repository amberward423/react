import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <nav className="bg-pink-300 p-4 text-black flex justify-around">
        
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
