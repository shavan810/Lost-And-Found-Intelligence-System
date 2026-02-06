import React from "react";
import cardsData from "../data/cards"; // reuse lost cards
import { Link } from "react-router-dom";

function Profile() {
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
    <div className="min-h-[80vh] pt-20 bg-gradient-to-r from-[#b9e3a6] to-[#5fa89e] p-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-red-800 text-center mb-6">
        Profile
      </h1>

      {/* Profile Section */}
      <div className="flex gap-10 items-center justify-center">

        {/* Avatar */}
        <div className="bg-white p-6 rounded-full shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            className="w-28"
          />
        </div>

        {/* Info */}
        <div className="space-y-3">
          <div>
            <label>Name</label>
            <input
              value="Shavan D Singh"
              className="border px-3 py-1 rounded w-[300px]"
            />
          </div>

          <div>
            <label>ID Number</label>
            <input
              value="123456798"
              className="border px-3 py-1 rounded w-[300px]"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              value="creative.shavan@gmail.com"
              className="border px-3 py-1 rounded w-[300px]"
            />
          </div>

          <div>
            <label>Contact Number</label>
            <input
              value="+91 1459566568"
              className="border px-3 py-1 rounded w-[300px]"
            />
          </div>

          <button className="bg-green-700 text-white px-6 py-2 rounded w-[300px]">
            Edit Profile
          </button>
        </div>
      </div>

      {/* User Items Cards */}
      <div className="flex gap-6 justify-center mt-10">
        {cardsData.slice(0, 3).map((item) => (
          <div key={item.id} className="bg-green-100 p-3 rounded-xl w-[220px] shadow-lg">
            <img src={item.image} className="w-full h-28 object-cover rounded" />
            <p className="text-sm font-semibold mt-2">{item.title}</p>
            <button className="bg-purple-600 text-white text-xs px-3 py-1 rounded mt-2 w-full">
              Contact
            </button>
          </div>
        ))}
      </div>

    </div>
    </>
  );
}

export default Profile;
