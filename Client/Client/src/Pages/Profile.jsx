import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import Navbar2 from "../Components/Nabar2";

function Profile() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [lostHistory, setLostHistory] = useState([]);
  const [foundHistory, setFoundHistory] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const userId = localStorage.getItem("userId");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    setEditMode(false);
    alert("Profile Updated");
  };

  useEffect(() => {
    fetchUserProfile();
    fetchHistory();
    fetchNotifications();
  }, []);

  // USER PROFILE FETCH
  const fetchUserProfile = async () => {
    try {

      const res = await axios.get(
        `http://localhost:5000/api/auth/user/${userId}`
      );

      setUser(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  // LOST & FOUND HISTORY
  const fetchHistory = async () => {
    try {

      const lostRes = await axios.get(
        `http://localhost:5000/api/lost/my/${userId}`
      );

      const foundRes = await axios.get(
        `http://localhost:5000/api/found/my/${userId}`
      );

      setLostHistory(lostRes.data);
      setFoundHistory(foundRes.data);

    } catch (error) {
      console.log(error);
    }
  };

  // NOTIFICATIONS
  const fetchNotifications = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/notifications/${userId}`
      );

      setNotifications(res.data);

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar2/>


      {/* PAGE */}
      <div className="min-h-screen pt-24 bg-gradient-to-r from-[#b9e3a6] to-[#5fa89e] px-4 md:px-16">

        {/* PROFILE INFO */}
        <div className="bg-white p-5 md:p-8 rounded-xl shadow mb-10">

          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">

            <h2 className="text-xl md:text-2xl font-bold text-green-800">
              User Profile
            </h2>

            {!editMode && (
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-500 text-white px-4 py-1 rounded mt-2 md:mt-0"
              >
                Edit
              </button>
            )}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                disabled={!editMode}
                onChange={handleChange}
                className="border w-full px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                disabled={!editMode}
                onChange={handleChange}
                className="border w-full px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="font-semibold">Phone</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                disabled={!editMode}
                onChange={handleChange}
                className="border w-full px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="font-semibold">Location</label>
              <input
                type="text"
                name="location"
                value={user.location}
                disabled={!editMode}
                onChange={handleChange}
                className="border w-full px-3 py-2 rounded"
              />
            </div>

          </div>

          {editMode && (
            <button
              onClick={saveProfile}
              className="bg-green-600 text-white px-4 py-2 rounded mt-4"
            >
              Save
            </button>
          )}

        </div>


        {/* NOTIFICATIONS */}
        <div className="bg-white p-5 md:p-6 rounded-xl shadow mb-10">

          <h2 className="text-lg md:text-xl font-bold mb-3">
            Notifications
          </h2>

          {notifications.length === 0 ? (
            <p className="text-gray-500">No Notifications</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n._id}
                className="border p-2 rounded mb-2 text-sm"
              >
                {n.message}
              </div>
            ))
          )}

        </div>


        {/* LOST HISTORY */}
        <div className="bg-white p-5 md:p-6 rounded-xl shadow mb-10">

          <h2 className="text-lg md:text-xl font-bold text-red-700 mb-4">
            Lost Item History
          </h2>

          {lostHistory.length === 0 ? (
            <p className="text-gray-500">No Lost Items Reported</p>
          ) : (
            lostHistory.map((item) => (
              <div
                key={item._id}
                className="border p-3 rounded mb-2 flex flex-col md:flex-row md:justify-between text-sm"
              >
                <span>{item.itemName}</span>
                <span>{item.location}</span>
                <span>{item.date}</span>
              </div>
            ))
          )}

        </div>


        {/* FOUND HISTORY */}
        <div className="bg-white p-5 md:p-6 rounded-xl shadow">

          <h2 className="text-lg md:text-xl font-bold text-green-700 mb-4">
            Found Item History
          </h2>

          {foundHistory.length === 0 ? (
            <p className="text-gray-500">No Found Items Reported</p>
          ) : (
            foundHistory.map((item) => (
              <div
                key={item._id}
                className="border p-3 rounded mb-2 flex flex-col md:flex-row md:justify-between text-sm"
              >
                <span>{item.itemName}</span>
                <span>{item.location}</span>
                <span>{item.date}</span>
              </div>
            ))
          )}

        </div>

      </div>
    </>
  );
}

export default Profile;