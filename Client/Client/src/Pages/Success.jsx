import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#B8DD8B] to-[#56A198]">

      <div className="bg-white p-6 rounded-xl shadow-xl text-center w-[320px]">

        <h2 className="text-xl font-bold text-green-700">Password Updated 🎉</h2>

        <p className="text-sm mt-2">Your password has been changed successfully.</p>

        <Link to="/login">
          <button className="mt-4 w-full bg-blue-600 text-white py-1 rounded">
            Go to Login
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Success;
