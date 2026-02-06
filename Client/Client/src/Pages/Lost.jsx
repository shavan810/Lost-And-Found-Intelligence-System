import React from "react";
import cardsData from "../data/cards";
import LostCard from "../components/Card";
import { Link } from "react-router-dom";

const Lost = () => {
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
    

    <div className="min-h-[80vh] pt-20 bg-gradient-to-r from-[#b9e3a6] to-[#5fa89e]">

      {/* Page Heading */}
      <div className="flex justify-between items-center px-10 pt-8">
        <h1 className="text-4xl font-bold">
          <span className="text-red-900">Lost</span>{" "}
          <span className="text-green-900">Items</span>
        </h1>

        {/* Report Button */}
        <button className="bg-red-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700">
          Report 🧾
        </button>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-10 justify-center mt-10 px-10 pb-20">
        {cardsData.map((item) => (
          <LostCard key={item.id} item={item} />
        ))}
      </div>

    </div>
    </>
  );
};

export default Lost;
