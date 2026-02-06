import { useState } from "react";
import registerImg from "../assets/Group6.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    registerNumber: "",
    faculty: "",
    phone: "",
    username: "",
    email: "",
    password: ""
  });

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      setShowPopup(true);
    } catch (err) {
      alert("Registration Failed ❌");
      console.log(err);
    }
  };

  return (
    <div className="min-h-[80vh] mt-[50px] flex items-center justify-center bg-gradient-to-r from-[#B8DD8B] to-[#56A198]">

      <div className="max-w-6xl w-full grid md:grid-cols-2 px-8">

        <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-xl w-[300px]">
          <h2 className="text-lg font-bold text-center mb-4">Register</h2>

          <form className="flex flex-col gap-2 text-sm" onSubmit={handleSubmit}>

            <input name="name" onChange={handleChange} placeholder="Name" className="px-2 py-1 border rounded" />

            <select name="gender" onChange={handleChange} className="px-2 py-1 border rounded">
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input name="registerNumber" onChange={handleChange} placeholder="Register Number" className="px-2 py-1 border rounded" />

            <select name="faculty" onChange={handleChange} className="px-2 py-1 border rounded">
              <option value="">Faculty</option>
              <option>Science</option>
              <option>Engineering</option>
              <option>Commerce</option>
            </select>

            <input name="phone" onChange={handleChange} placeholder="Phone Number" className="px-2 py-1 border rounded" />

            <input name="username" onChange={handleChange} placeholder="User Name" className="px-2 py-1 border rounded" />

            <input name="email" onChange={handleChange} placeholder="Email" className="px-2 py-1 border rounded" />

            <input name="password" type="password" onChange={handleChange} placeholder="Password" className="px-2 py-1 border rounded" />

            <button type="submit" className="bg-green-600 text-white py-1 rounded mt-2">
              Submit
            </button>

          </form>

          <p className="text-xs mt-2 text-center">
            Already have an account? <Link to="/login" className="text-blue-600">Sign in</Link>
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex items-center justify-center">
          <div className="bg-black rounded-xl shadow-xl overflow-hidden w-[500px] h-[300px] relative">
            <img src={registerImg} className="w-full h-full object-cover opacity-80" />
          </div>
        </div>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl text-center w-[300px]">
            <h2 className="text-xl font-bold text-green-600">🎉 Registration Successful</h2>

            <button
              onClick={() => navigate("/login")}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
            >
              Go to Login
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Register;
