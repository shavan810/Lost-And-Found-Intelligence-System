import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  if (location.pathname === "/dashboard") {
    return null;
  } else if (location.pathname === "/lost") {
    return null;
  } else if (location.pathname === "/report-lost") {
    return null;
  } else if (location.pathname === "/found") {
    return null;
  } else if (location.pathname === "/report-found") {
    return null;
  } else if (location.pathname === "/profile") {
    return null;
  }

  return (
    <nav className="w-full text-black bg-white/50 fixed top-0 left-0 z-50">
      
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 md:gap-3 px-3 md:px-4 py-2">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
        />

        {/* Title */}
        <h1 className="text-sm sm:text-base md:text-lg font-intern font-bold">
          Digital Lost & Found System
        </h1>

        {/* Right Menu */}
        <div className="ml-auto flex gap-3 md:gap-4 text-xs sm:text-sm">
          <Link
            to="/"
            className="hover:text-blue-400 font-bold"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-400 font-bold"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;