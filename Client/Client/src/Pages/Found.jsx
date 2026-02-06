import React, { useState } from "react";
import foundData from "../data/cards";
import FoundCard from "../components/Card";
import { Link } from "react-router-dom";

function Found() {
  const [search, setSearch] = useState("");

  // Filter items by name
  const filteredItems = foundData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
     <nav className="bg-white/80 backdrop-blur-md shadow flex justify-between items-center px-8 py-2 fixed w-full top-0 z-50">
    
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-lg">
              🔍 Digital Lost & Found System
            </div>
    
            {/* Menu */}
            <ul className="flex gap-6 text-sm font-semibold">
              <Link to="/dashboard" className="bg-green-200 px-3 py-1 rounded">Home</Link>
              <Link to="/lost">Lost</Link>
              <Link to="/report-lost">Report Lost</Link>
              <Link to="/found">Found</Link>
              <Link to="/report-found">Report Found</Link>
              <Link to="/profile">Profile</Link>
            </ul>
    
            {/* Sign Out */}
        <Link to="/login">  
        <button className="bg-red-500 text-white px-4 py-1 rounded">
          Sign Out
        </button>
        </Link>
          </nav>

    <div className="min-h-[80vh] pt-20 bg-gradient-to-r from-[#b9e3a6] to-[#5fa89e] px-10 pt-8">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-green-900 text-center">
        Found Items
      </h1>

      {/* Search + Report */}
      <div className="flex justify-between items-center mt-6">

        {/* Search Box */}
        <input
          type="text"
          placeholder=" Item Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-full w-[300px]"
        />

        {/* Report Button */}
        <button className="bg-green-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700">
          Report ✅
        </button>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-10 justify-center mt-10 pb-10">
        {filteredItems.map((item) => (
          <FoundCard key={item.id} item={item} />
        ))}
      </div>

    </div>
    </>
  );
}

export default Found;
