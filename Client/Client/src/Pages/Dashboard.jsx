import { NavLink, Link } from "react-router-dom";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";

export default function Home() {

   const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const userId = localStorage.getItem("userId");

  useEffect(() => {

    if (!userId) return;

    fetch(`http://localhost:5000/api/notifications/${userId}`)
      .then(res => res.json())
      .then(data => setNotifications(data))
      .catch(err => console.log(err));

  }, [userId]);

    const unreadCount = notifications.filter(n => !n.isRead).length;


  return (
    <>
      {/* ================= NAVBAR ================= */}




      {/* ================= NAVBAR ================= */}
      <nav className="bg-white/80 backdrop-blur-md shadow flex flex-wrap justify-between items-center px-4 md:px-8 py-3 fixed w-full top-0 z-50">

        {/* Logo */}
        <div className="font-bold text-sm md:text-lg">
          🔍 Digital Lost & Found System
        </div>

        {/* Menu */}
        <ul className="flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm font-semibold mt-2 md:mt-0">

          <NavLink to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Home
          </NavLink>

          <NavLink to="/lost"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Lost
          </NavLink>

          <NavLink to="/report-lost"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Report Lost
          </NavLink>

          <NavLink to="/found"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Found
          </NavLink>

          <NavLink to="/report-found"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Report Found
          </NavLink>

          <NavLink to="/profile"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }>
            Profile
          </NavLink>

          {/* 🔔 Notification Bell */}
          <li className="relative cursor-pointer">

            <FaBell
              size={18}
              onClick={() => setShowDropdown(!showDropdown)}
            />

            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {unreadCount}
              </span>
            )}

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded p-2 z-50">

                {notifications.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No notifications
                  </p>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n._id}
                      className="border-b p-2 text-sm hover:bg-gray-100"
                    >
                      🔔 {n.message}
                    </div>
                  ))
                )}

              </div>
            )}

          </li>

        </ul>

        {/* Sign Out */}
        <Link to="/login">
          <button className="bg-red-500 text-white px-3 md:px-4 py-1 rounded text-xs md:text-sm">
            Sign Out
          </button>
        </Link>

      </nav>








      {/* ================= HERO SECTION ================= */}
      <div className="pt-24 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-8">

          {/* LEFT TEXT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              Find & Recover <br />
              Lost Items <br />
              <span className="text-green-700">Smartly</span>
            </h1>

            <p className="text-sm text-gray-700 mt-4 max-w-md mx-auto md:mx-0">
              Our Digital Lost & Found System helps users report lost or found
              items easily and connects the right people through intelligent
              matching.
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">

              <Link to="/report-lost">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow-lg">
                  Report Lost
                </button>
              </Link>

              <Link to="/report-found">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-lg">
                  Report Found
                </button>
              </Link>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center gap-6">

            {/* Images Stack */}
            <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-55 md:h-65">

              <img
                src={hero1}
                alt=""
                className="absolute top-0 left-0 w-40 rounded-xl shadow-2xl z-30"
              />

              <img
                src={hero2}
                alt=""
                className="absolute top-[40px] left-[100px] w-40 rounded-xl shadow-2xl z-20"
              />

              <img
                src={hero3}
                alt=""
                className="absolute top-[80px] left-[180px] w-40 rounded-xl shadow-2xl z-10"
              />

            </div>

          </div>
        </div>
      </div>

      {/* ================= INFO SECTION ================= */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg">Report Lost Item</h3>
            <p className="text-sm text-gray-600 mt-2">
              Submit details of items you have lost so others can help find them.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg">Report Found Item</h3>
            <p className="text-sm text-gray-600 mt-2">
              Found something? Report it here so the rightful owner can claim it.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg">Smart Matching</h3>
            <p className="text-sm text-gray-600 mt-2">
              Our system intelligently matches lost and found items to reconnect
              them with their owners.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}