// import React, { useState } from "react";
import cardsData from "../data/cards";
import LostCard from "../components/Card";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
const Lost = () => {
  const [search, setSearch] = useState("");

  const filteredItems = cardsData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/lost")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white/80 backdrop-blur-md shadow flex justify-between items-center px-8 py-2 fixed w-full top-0 z-50">
        <div className="font-bold text-lg">🔍 Digital Lost & Found System</div>

        <ul className="flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm font-semibold">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/lost"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }
          >
            Lost
          </NavLink>

          <NavLink
            to="/report-lost"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }
          >
            Report Lost
          </NavLink>

          <NavLink
            to="/found"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }
          >
            Found
          </NavLink>

          <NavLink
            to="/report-found"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }
          >
            Report Found
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white px-3 py-1 rounded"
                : "hover:bg-green-200 px-3 py-1 rounded"
            }
          >
            Profile
          </NavLink>
        </ul>

        <Link to="/login">
          <button className="bg-red-500 text-white px-4 py-1 rounded">
            Sign Out
          </button>
        </Link>
      </nav>

      {/* ================= PAGE ================= */}
      <div className="min-h-screen pt-24 bg-gradient-to-r from-[#b9e3a6] to-[#5fa89e]">
        {/* Heading + Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-10">
          <h1 className="text-4xl font-bold">
            <span className="text-red-900">Lost</span>{" "}
            <span className="text-green-900">Items</span>
          </h1>

          <div className="flex gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search lost item..."
              className="px-4 py-2 rounded-lg outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Report Button */}
            <Link to="/report-lost">
              <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
                Report 🧾
              </button>
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 mt-10 pb-20">
          {items.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow">
              <h2 className="font-bold text-lg">{item.item}</h2>

              <p>{item.description}</p>

              <p className="text-sm text-gray-600">{item.location}</p>

              <p className="text-sm">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lost;
