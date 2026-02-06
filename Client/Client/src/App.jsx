import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Home from './Pages/Home';
import Regester from './Pages/Regester';
import ForgetPassword from './Pages/ForgetPassword';
import VerifyOTP from './Pages/VerifyOTP';
import ResetPassword from './Pages/ResetPassword';
import Success from './Pages/Success';
import Dashboard from './Pages/Dashboard';
import Lost from './Pages/Lost';
import ReportLost from './Pages/ReportLost';
import Found from './Pages/Found';
import ReportFound from './Pages/ReportFound';
import Profile from './Pages/Profile';
function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#B8DD8B] to-[#56A198]">
        <div className="grow">
        <Navbar />
          <Routes>
            <Route path="/Regestiration" element={<Regester />}/>
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/report-found" element={<ReportFound />} />
            <Route path="/report-lost" element={<ReportLost />} />
            <Route path="/found" element={<Found />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lost" element={<Lost />} />
            <Route path="/success" element={<Success />} /> 
            <Route path="/Forget-Password" element={<ForgetPassword />} />
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
