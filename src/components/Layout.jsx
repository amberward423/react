import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <nav className="bg-pink-300 p-4 text-black flex justify-around">
        <Link
          to="/"
          className="px-4 py-2 rounded-lg text-black hover:bg-pink-400 transition"
        >
          Home
        </Link>
        <Link
          to="/profile"
          className="px-4 py-2 rounded-lg text-black hover:bg-pink-400 transition"
        >
          Profile
        </Link>
        <Link
          to="/upload"
          className="px-4 py-2 rounded-lg text-black hover:bg-pink-400 transition"
        >
          Upload
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 rounded-lg text-black hover:bg-pink-400 transition"
        >
          Login
        </Link>
        <Link
          to="/logout"
          className="px-4 py-2 rounded-lg text-black hover:bg-pink-400 transition"
        >
          Logout
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
