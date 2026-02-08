import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/DoctorsPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import Appointment from "./pages/Appointment";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:speciality" element={<DoctorsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointment />} />
         <Route path="/appointment/:doctor-id" element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default App;
