import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import aboutImg from "../assets/about.png";

function Home() {
  return (
    <div className="bg-gradient-to-r from-[rgb(184,221,139)] to-[#56A198]">

      {/* ================= HERO SECTION ================= */}
      <div className="flex items-center justify-center min-h-screen">

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-5 px-8">

          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-[65px] font-bold bg-gradient-to-r from-[#FF0000] via-[#AE0000] via-[#7FFF00] to-[#13F000] bg-clip-text text-transparent">
              Find & Recover <br /> With Ease
            </h1>

            <p className="text-lg text-gray-700 mt-4 max-w-sm">
              Experience effortless recovery with our dedicated digital lost and found service.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center gap-6">

            {/* Buttons */}
            <div className="flex flex-col gap-4 mt-[100px]">
              <Link to="/login">
                <button className="w-[160px] bg-gradient-to-r from-[#991313] to-[#FF1F1F] text-white px-8 py-2 rounded-md shadow-lg">
                  Lost 🧰
                </button>
              </Link>

              <Link to="/login">
                <button className="w-[160px] bg-gradient-to-r from-[#00CB14] to-[#00650A] text-white px-8 py-2 rounded-md shadow-lg">
                  Found 🔍
                </button>
              </Link>
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

      {/* ================= ABOUT US SECTION ================= */}
      <div className=" bg-gradient-to-r from-[#eef8f7] to-[#f0ebe9] min-h-screen flex flex-col items-center justify-center text-center px-6 relative">

        <img 
          src={aboutImg} 
          className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none"
        />

        <div className="relative max-w-4xl">
          <h2 className="text-4xl font-bold text-red-700 mb-6">About Us</h2>
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>

          <p className="text-lg text-gray-800 leading-relaxed">
            Our mission is to create a reliable and efficient platform for reuniting lost 
            items with their rightful owners. We aim to foster a supportive community where 
            users can easily report, search, and recover lost belongings. By leveraging modern 
            web technologies, we strive to reduce the time, effort, and stress associated with 
            finding lost items, ensuring a seamless and satisfying experience for all users.
          </p>
        </div>

      </div>

      {/* ================= HOW IT WORKS ================= */}
      <div className="py-20 bg-white text-center px-8">

        <h2 className="text-4xl font-bold text-green-700 mb-10">How It Works</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-green-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">1. Report Lost Item</h3>
            <p className="text-sm">
              Users can report lost items by submitting details such as category, location, and description.
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">2. Search Found Items</h3>
            <p className="text-sm">
              Users can browse found items posted by others and match their lost belongings.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">3. Secure Handover</h3>
            <p className="text-sm">
              After verification, users can safely recover their belongings using OTP confirmation.
            </p>
          </div>

        </div>
      </div>

      {/* ================= FEATURES SECTION ================= */}
      <div className="py-20 bg-gradient-to-r from-[#eef8f7] to-[#f0ebe9] px-8">

        <h2 className="text-4xl font-bold text-center mb-10">Key Features</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-lg">

          <ul className="space-y-4">
            <li>✅ User Registration and Login System</li>
            <li>✅ Lost and Found Item Reporting Module</li>
            <li>✅ OTP-Based Verification for Secure Handover</li>
            <li>✅ Real-time Notifications and Alerts</li>
            <li>✅ Role-based Access Control</li>
          </ul>

          <ul className="space-y-4">
            <li>✅ Admin-Free System (Direct User Interaction)</li>
            <li>✅ Mobile Responsive Design</li>
            <li>✅ Search and Filter System</li>
            <li>✅ Secure Password Encryption</li>
            <li>✅ Modern UI using React & Tailwind CSS</li>
          </ul>

        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="py-20 bg-white px-8 text-center">

        <h2 className="text-4xl font-bold text-red-700 mb-6">Why Choose Us?</h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          The Digital Lost and Found System provides a smart and reliable solution to the common 
          problem of lost belongings in campuses, offices, and public places. Our platform ensures 
          privacy, security, and fast recovery through a user-friendly interface. Unlike traditional 
          manual systems, our digital approach minimizes paperwork, reduces search time, and improves 
          user satisfaction by offering real-time matching and verification mechanisms.
        </p>

      </div>

    </div>
  );
}

export default Home;
