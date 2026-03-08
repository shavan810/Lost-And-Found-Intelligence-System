import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar2 from "../Components/Nabar2";

function ReportLost() {

  const [formData, setFormData] = useState({
    name: "",
    item: "",
    location: "",
    date: "",
    description: "",
    photo: null
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const userId = localStorage.getItem("userId");

      const response = await fetch("http://localhost:5000/api/lost/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          userId: userId
        })
      });

      const data = await response.json();

      console.log(data);

      alert("Lost Item Reported!");

      // reset form
      setFormData({
        name: "",
        item: "",
        location: "",
        date: "",
        description: "",
        photo: null
      });

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {/* NAVBAR */}

      <Navbar2/>
      {/* PAGE */}
      <div className="min-h-screen pt-24 bg-gradient-to-r from-[#b9e3a6] to-[#5fa89e] flex items-center justify-center px-4">

        <div className="bg-green-200 p-8 rounded-xl shadow-lg w-full max-w-md">

          <h1 className="text-2xl font-bold mb-6 text-center">
            Report Lost Item
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border w-full px-3 py-2 rounded"
              required
            />

            <input
              type="text"
              name="item"
              placeholder="Lost Item"
              value={formData.item}
              onChange={handleChange}
              className="border w-full px-3 py-2 rounded"
              required
            />

            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border w-full px-3 py-2 rounded"
              required
            >
              <option value="">Select Location</option>
              <option>Mumbai Naka</option>
              <option>College Campus</option>
              <option>Bus Stop</option>
              <option>Railway Station</option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border w-full px-3 py-2 rounded"
              required
            />

            <textarea
              name="description"
              placeholder="Item Description"
              value={formData.description}
              onChange={handleChange}
              className="border w-full px-3 py-2 rounded"
            />

            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="border w-full px-3 py-2 rounded bg-white"
            />

            <div className="flex justify-center gap-4">

              <button
                type="submit"
                className="bg-green-600 text-white px-5 py-2 rounded"
              >
                Submit
              </button>

              <button
                type="reset"
                className="bg-gray-400 px-5 py-2 rounded"
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

export default ReportLost;