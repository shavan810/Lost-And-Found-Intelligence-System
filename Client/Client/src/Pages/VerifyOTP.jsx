import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  // VERIFY OTP
  const verifyOTP = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, otp })
      });

      const data = await res.json();
      alert(data);

      if (data === "OTP verified") {
        navigate("/reset-password", { state: { email } });
      }
    } catch (err) {
      alert("Error verifying OTP");
    }
  };

  // RESEND OTP
  const resendOTP = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      alert("OTP resent");
    } catch (err) {
      alert("Error resending OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#B8DD8B] to-[#56A198]">
      <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-xl w-[320px]">

        <h2 className="text-xl font-bold text-center mb-3">
          Verify OTP
        </h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full px-2 py-1 border rounded mb-3"
        />

        <button
          onClick={resendOTP}
          className="w-full bg-gray-500 text-white py-1 rounded mb-2"
        >
          Resend OTP
        </button>

        <button
          onClick={verifyOTP}
          className="w-full bg-green-600 text-white py-1 rounded"
        >
          Verify OTP
        </button>

      </div>
    </div>
  );
}

export default VerifyOTP;
