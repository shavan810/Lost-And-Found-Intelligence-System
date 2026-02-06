import React, { useState } from "react";
import { Link } from "react-router-dom";

function ReportFound() {
  const [formData, setFormData] = useState({
    name: "",
    item: "",
    location: "",
    date: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Found Item Reported!");
  };

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

    <div className="min-h-[80vh] pt-20 bg-gradient-to-r from-[#b9e3a6] to-[#5fa89e] flex flex-col items-center justify-center">

      <h1 className="text-3xl font-bold mb-6 text-green-900">
        Report Found Item
      </h1>

      <div className="bg-green-200 p-8 rounded-xl shadow-lg w-[450px]">

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div className="flex justify-between items-center">
            <label className="font-semibold">Name :</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="border px-2 py-1 rounded w-[250px]"
            />
          </div>

          {/* Item */}
          <div className="flex justify-between items-center">
            <label className="font-semibold">Item :</label>
            <select
              name="item"
              onChange={handleChange}
              className="border px-2 py-1 rounded w-[250px]"
            >
              <option>Select Item</option>
              <option>Document</option>
              <option>Mobile</option>
              <option>Wallet</option>
              <option>Bag</option>
            </select>
          </div>

          {/* Location */}
          <div className="flex justify-between items-center">
            <label className="font-semibold">Location :</label>
            <select
              name="location"
              onChange={handleChange}
              className="border px-2 py-1 rounded w-[250px]"
            >
              <option>Select Location</option>
              <option>Mumbai Naka</option>
              <option>College Campus</option>
              <option>Bus Stop</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex justify-between items-center">
            <label className="font-semibold">Date :</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="border px-2 py-1 rounded w-[250px]"
            />
          </div>

          {/* Description */}
          <div className="flex justify-between items-center">
            <label className="font-semibold">Item Description :</label>
            <textarea
              name="description"
              onChange={handleChange}
              className="border px-2 py-1 rounded w-[250px]"
            ></textarea>
          </div>

          {/* Upload */}
          <div className="flex justify-between items-center">
            <label className="font-semibold">Upload Photo :</label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="border px-2 py-1 rounded w-[250px]"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="bg-green-600 text-white px-4 py-1 rounded">
              Submit
            </button>
            <button type="reset" className="bg-gray-400 px-4 py-1 rounded">
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
   </>
  );
}

export default ReportFound;
