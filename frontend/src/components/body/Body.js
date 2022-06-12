import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import Register from "./auth/Register";
// import ActivationEmail from "./auth/ActivationEmail";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import DashboardPatient from "../DashboardPatient";
import AppointmentPatient from "../AppointmentPatient"
import DashboardDoctor from "../DashboardDoctor";
import PatientProfile from "../PatientProfile";
import DoctorProfile from "../DoctorProfile";
import AppoinmentInformation from "../AppoinmentInformation";
// import HomeBanner from "../HomeBanner";




function Body() {
  return (
    <section>
      <Routes>
      {/* <Route exact path="/homebanner" element={<HomeBanner />} /> */}
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboardpatient" element={<DashboardPatient />} />
        <Route exact path="/appointmentpatient/:id" element={<AppointmentPatient />} />
        <Route exact path="/dashboarddoctor" element={<DashboardDoctor />} />
        <Route exact path="/patientprofile" element={<PatientProfile />} />
        <Route exact path="/doctorprofile" element={<DoctorProfile />} />
        <Route exact path="/appointmentinformation" element={<AppoinmentInformation />} />




        {/* <Route exact path="/patient/activate/:activation_token" element={<ActivationEmail />} /> */}
      </Routes>
    </section>
  );
}

export default Body;
