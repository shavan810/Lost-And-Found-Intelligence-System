import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Navbar() {
  const location = useLocation();
  if (location.pathname === "/dashboard") {
    return null;//sikhna hai ye thoda detail mai 
  }else if (location.pathname === "/lost") {
    return null;
  }else if (location.pathname === "/report-lost") {
    return null;
  }else if (location.pathname === "/found") {
    return null;
  }else if (location.pathname === "/report-found") {
    return null;
  }else if (location.pathname === "/profile") {
    return null;
  } 
  return (
    <nav className="w-full text-black bg-white/50 fixed ">
      <div className="max-w-7xl mx-auto flex items-center gap-3 px-4 py-2">
        
        
        <img
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />

        
        <h1 className="text-lg font-intern font-bold">
          Digital Lost & Found System
        </h1>

        {/* Right Menu */}
        <div className="ml-auto flex gap-4 text-sm">
          <Link to="/" className="hover:text-blue-400 text-sm font-bold">Home</Link>
          <Link to="/login" className="hover:text-blue-400 text-sm font-bold">Login</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
