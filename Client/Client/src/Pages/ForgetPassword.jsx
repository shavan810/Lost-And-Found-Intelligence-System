import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sendOTP = async () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      alert(data);

      if (data === "OTP sent to email") {
        navigate("/verify-otp", { state: { email } });
      }
    } catch (err) {
      alert("Server error");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#B8DD8B] to-[#56A198]">
      <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-xl w-[320px]">
        <h2 className="text-xl font-bold text-center mb-3">
          Forgot Password
        </h2>

        <p className="text-xs text-center mb-3">
          Enter your email to receive OTP
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-2 py-1 border rounded mb-3"
        />

        <button
          onClick={sendOTP}
          className="w-full bg-blue-600 text-white py-1 rounded"
        >
          Send OTP
        </button>

        <p className="text-xs mt-3 text-center">
          Back to{" "}
          <Link to="/login" className="text-green-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
