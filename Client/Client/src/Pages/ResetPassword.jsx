import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const handleReset = async () => {
    if (!newPassword || !confirmPassword) {
      alert("Fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          newPassword
        })
      });

      const data = await res.json();
      alert(data);

      if (data === "Password reset successful") {
        navigate("/login"); // ya /success
      }
    } catch (err) {
      alert("Error resetting password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#B8DD8B] to-[#56A198]">
      <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-xl w-[320px]">

        <h2 className="text-xl font-bold text-center mb-3">
          Create New Password
        </h2>

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-2 py-1 border rounded mb-2"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-2 py-1 border rounded mb-3"
        />

        <button
          onClick={handleReset}
          className="w-full bg-green-600 text-white py-1 rounded"
        >
          Submit
        </button>

      </div>
    </div>
  );
}

export default ResetPassword;
