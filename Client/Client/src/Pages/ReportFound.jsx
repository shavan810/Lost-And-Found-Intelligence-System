import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar2 from "../Components/Nabar2";

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

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/found/report-found",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      console.log(data);

      alert("Found Item Reported!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {/* NAVBAR */}


      <Navbar2 />
      {/* PAGE */}
      <div className="min-h-screen pt-24 bg-gradient-to-r from-[#b9e3a6] to-[#5fa89e] flex items-center justify-center px-4">
        <div className="bg-green-200 p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-green-900">
            Report Found Item
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="font-semibold text-sm">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="border w-full px-3 py-2 rounded mt-1"
                required
              />
            </div>

            {/* Item */}
            <div>
              <label className="font-semibold text-sm">Item</label>
              <input
                type="text"
                name="item"
                placeholder="Lost Item"
                value={formData.item}
                onChange={handleChange}
                className="border w-full px-3 py-2 rounded"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="font-semibold text-sm">Location</label>
              <select
                name="location"
                onChange={handleChange}
                className="border w-full px-3 py-2 rounded mt-1"
                required
              >
                <option>Select Location</option>
                <option>Mumbai Naka</option>
                <option>College Campus</option>
                <option>Bus Stop</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="font-semibold text-sm">Date</label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                className="border w-full px-3 py-2 rounded mt-1"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="font-semibold text-sm">Item Description</label>
              <textarea
                name="description"
                onChange={handleChange}
                rows="3"
                className="border w-full px-3 py-2 rounded mt-1"
              ></textarea>
            </div>

            {/* Upload */}
            <div>
              <label className="font-semibold text-sm">Upload Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleChange}
                className="border w-full px-3 py-2 rounded mt-1 bg-white"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 pt-2">
              <button
                type="submit"
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>

              <button
                type="reset"
                className="bg-gray-400 px-5 py-2 rounded hover:bg-gray-500"
              >
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
