import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

function Profile() {

  const [user, setUser] = useState({
    name: "Shavan Singh",
    email: "creative.shavan@gmail.com",
    phone: "7387990810",
    location: "Nashik",
  });

  const [editMode, setEditMode] = useState(false);
  const [lostHistory, setLostHistory] = useState([]);
  const [foundHistory, setFoundHistory] = useState([]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    setEditMode(false);
    alert("Profile Updated");
  };

  useEffect(() => {
    fetchHistory();
  }, []);

const fetchHistory = async () => {
  try {

    const userId = localStorage.getItem("userId");

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

const [notifications,setNotifications] = useState([]);

const userId = localStorage.getItem("userId")

useEffect(()=>{

fetch(`http://localhost:5000/api/notifications/${userId}`)
.then(res=>res.json())
.then(data=>setNotifications(data))

},[])
  return (
    <>
    <div>

<h2>Notifications</h2>

{notifications.map((n)=>(
<div key={n._id}>
{n.message}
</div>
))}

</div>

      {/* NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md shadow flex flex-wrap justify-between items-center px-4 md:px-8 py-2 fixed w-full top-0 z-50">

        <div className="font-bold text-sm md:text-lg">
          🔍 Digital Lost & Found System
        </div>

        <ul className="flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm font-semibold mt-2 md:mt-0">

          <NavLink to="/dashboard" className={({ isActive }) =>
            isActive
              ? "bg-green-500 text-white px-3 py-1 rounded"
              : "hover:bg-green-200 px-3 py-1 rounded"
          }>
            Home
          </NavLink>

          <NavLink to="/lost" className={({ isActive }) =>
            isActive
              ? "bg-green-500 text-white px-3 py-1 rounded"
              : "hover:bg-green-200 px-3 py-1 rounded"
          }>
            Lost
          </NavLink>

          <NavLink to="/report-lost" className={({ isActive }) =>
            isActive
              ? "bg-green-500 text-white px-3 py-1 rounded"
              : "hover:bg-green-200 px-3 py-1 rounded"
          }>
            Report Lost
          </NavLink>

          <NavLink to="/found" className={({ isActive }) =>
            isActive
              ? "bg-green-500 text-white px-3 py-1 rounded"
              : "hover:bg-green-200 px-3 py-1 rounded"
          }>
            Found
          </NavLink>

          <NavLink to="/report-found" className={({ isActive }) =>
            isActive
              ? "bg-green-500 text-white px-3 py-1 rounded"
              : "hover:bg-green-200 px-3 py-1 rounded"
          }>
            Report Found
          </NavLink>

          <NavLink to="/profile" className={({ isActive }) =>
            isActive
              ? "bg-green-500 text-white px-3 py-1 rounded"
              : "hover:bg-green-200 px-3 py-1 rounded"
          }>
            Profile
          </NavLink>

        </ul>

        <Link to="/login">
          <button className="bg-red-500 text-white px-4 py-1 rounded">
            Sign Out
          </button>
        </Link>

      </nav>


      {/* PAGE */}
      <div className="min-h-screen pt-24 bg-gradient-to-r from-[#b9e3a6] to-[#5fa89e] px-6 md:px-20">

        {/* PROFILE INFO */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-green-800">
              User Profile
            </h2>

            {!editMode && (
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                Edit
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                disabled={!editMode}
                onChange={handleChange}
                className="border w-full px-3 py-1 rounded"
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
                className="border w-full px-3 py-1 rounded"
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
                className="border w-full px-3 py-1 rounded"
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
                className="border w-full px-3 py-1 rounded"
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


        {/* LOST HISTORY */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">

          <h2 className="text-xl font-bold text-red-700 mb-4">
            Lost Item History
          </h2>

          <div className="space-y-3">

            {lostHistory.length === 0 ? (

              <p className="text-gray-500">No Lost Items Reported</p>

            ) : (

              lostHistory.map((item) => (
                <div
                  key={item._id}
                  className="border p-3 rounded flex justify-between"
                >
                  <span>{item.itemName}</span>
                  <span>{item.location}</span>
                  <span>{item.date}</span>
                </div>
              ))

            )}

          </div>

        </div>


        {/* FOUND HISTORY */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold text-green-700 mb-4">
            Found Item History
          </h2>

          <div className="space-y-3">

            {foundHistory.length === 0 ? (

              <p className="text-gray-500">No Found Items Reported</p>

            ) : (

              foundHistory.map((item) => (
                <div
                  key={item._id}
                  className="border p-3 rounded flex justify-between"
                >
                  <span>{item.itemName}</span>
                  <span>{item.location}</span>
                  <span>{item.date}</span>
                </div>
              ))

            )}

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;