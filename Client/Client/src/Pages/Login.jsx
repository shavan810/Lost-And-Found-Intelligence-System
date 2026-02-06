import bgImg from "../assets/Group6.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      // Save token
      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");

      // redirect
      navigate("/dashboard");

    } catch (err) {
      alert("Login Failed ❌");
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-[80vh] mt-[50px] bg-linear-to-r from-[#B8DD8B] to-[#56A198] flex items-center justify-center">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 p-6">

        {/* LEFT IMAGE */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img src={bgImg} alt="Login" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/50 flex items-center p-6">
            <div className="text-white border-2 border-white p-5">
              <h2 className="text-xl font-bold mb-3">
                Welcome to Our Digital Lost and Found Website!
              </h2>
              <p className="text-sm leading-relaxed">
                We help you recover lost items quickly and securely.
              </p>
              <p className="mt-3 text-xs italic">
                Happy searching!
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleLogin}
            className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-md"
          >
            <h2 className="text-xl font-bold text-center mb-6">Login</h2>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-md border bg-white focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-md border bg-white focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Sign in
              </button>

              <Link to="/Regestiration">
                <button
                  type="button"
                  className="bg-linear-to-r from-[#00CB14] to-[#00650A] text-white px-4 py-2 rounded-md"
                >
                  Sign up
                </button>
              </Link>
            </div>

            {/* Links */}
            <div className="flex justify-between mt-4 text-sm">
              <Link to="/Regestiration" className="hover:underline">
                Create Account
              </Link>

              <Link to="/Forget-Password" className="hover:underline">
                Forgot Password?
              </Link>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;
