import { Link, NavLink } from "react-router-dom";
import { FaBell, FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar2() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <div className="font-bold text-sm md:text-lg">
          🔍 Digital Lost & Found System
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <FaBars
            className="text-xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold">

          <NavLink to="/dashboard"
            className={({isActive}) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Home
          </NavLink>

          <NavLink to="/lost"
            className={({isActive}) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Lost
          </NavLink>

          <NavLink to="/report-lost"
            className={({isActive}) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Report Lost
          </NavLink>

          <NavLink to="/found"
            className={({isActive}) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Found
          </NavLink>

          <NavLink to="/report-found"
            className={({isActive}) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Report Found
          </NavLink>

          <NavLink to="/profile"
            className={({isActive}) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Profile
          </NavLink>

          {/* Notification */}
          <div className="relative cursor-pointer">

            <FaBell
              onClick={() => setShowDropdown(!showDropdown)}
            />

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded p-2">
                <p className="text-sm text-gray-500">
                  No notifications
                </p>
              </div>
            )}

          </div>

          <Link to="/login">
            <button className="bg-red-500 text-white px-4 py-1 rounded">
              Sign Out
            </button>
          </Link>

        </ul>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">

          <div className="flex flex-col gap-3 text-sm font-semibold">

            <NavLink to="/dashboard">Home</NavLink>
            <NavLink to="/lost">Lost</NavLink>
            <NavLink to="/report-lost">Report Lost</NavLink>
            <NavLink to="/found">Found</NavLink>
            <NavLink to="/report-found">Report Found</NavLink>
            <NavLink to="/profile">Profile</NavLink>

            <Link to="/login">
              <button className="bg-red-500 text-white px-4 py-1 rounded w-full">
                Sign Out
              </button>
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar2;