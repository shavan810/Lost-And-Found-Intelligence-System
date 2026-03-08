import React, { useState,useEffect } from "react";
import foundData from "../data/cards";
import FoundCard from "../components/Card";
import { Link, NavLink } from "react-router-dom";

function Found() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/found")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItems = foundData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md shadow flex flex-wrap justify-between items-center px-4 md:px-8 py-2 fixed w-full top-0 z-50">
        <div className="font-bold text-sm md:text-lg">
          🔍 Digital Lost & Found System
        </div>

        <ul className="flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm font-semibold mt-2 md:mt-0">
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
          <button className="bg-red-500 text-white px-3 md:px-4 py-1 rounded text-xs md:text-sm">
            Sign Out
          </button>
        </Link>
      </nav>

      {/* PAGE */}
      <div className="min-h-screen pt-24 bg-gradient-to-r from-[#b9e3a6] to-[#5fa89e] px-4 md:px-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 text-center">
          Found Items
        </h1>

        {/* Search + Report */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
          {/* Search */}
          <input
            type="text"
            placeholder="Search Item Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-full w-full md:w-[300px]"
          />

          {/* Report */}
          <Link to="/report-found">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              Report Found
            </button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 pb-16">
          {items.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow">
              <h2 className="font-bold">{item.item}</h2>

              <p>{item.description}</p>

              <p>{item.location}</p>

              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Found;
