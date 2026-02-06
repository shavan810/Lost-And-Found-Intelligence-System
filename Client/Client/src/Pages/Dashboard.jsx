import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#B8DD8B] to-[#56A198]">

      {/* ================= NAVBAR ================= */}
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

      {/* ================= HERO SECTION ================= */}
      <div className="pt-20 flex items-center justify-center min-h-[80vh]">

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 px-8">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-[60px] font-bold text-black">
              Find & <br /> Recover <br />
              <span className="text-green-800">With Ease</span>
            </h1>

            <p className="text-sm text-gray-700 mt-4 max-w-sm">
              Experience effortless recovery with our dedicated lost and found service.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center gap-6">

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <button className="bg-red-500 text-white px-6 py-2 rounded shadow-lg flex items-center gap-2">
                Lost 🧰
              </button>

              <button className="bg-green-600 text-white px-6 py-2 rounded shadow-lg flex items-center gap-2">
                Found 🔍
              </button>
            </div>

            {/* Images Stack */}
            <div className="relative w-[350px] h-[250px]">
              <img src={hero1} className="absolute top-0 left-0 w-44 rounded-xl shadow-2xl z-30" />
              <img src={hero2} className="absolute top-[40px] left-[100px] w-44 rounded-xl shadow-2xl z-20" />
              <img src={hero3} className="absolute top-[80px] left-[180px] w-44 rounded-xl shadow-2xl z-10" />
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
