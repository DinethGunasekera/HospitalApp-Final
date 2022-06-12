const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
require('dotenv').config()
const fileUpload = require('express-fileupload')
const connectDB = require("./src/config/database");
const UserAPI = require("./src/api/user.api");
const AppointmentAPI = require("./src/api/appointment.api");
const DoctorPrescAPI = require("./src/api/doctorPrescription.api");
const PatientAPI = require("./src/api/patient.api");
const DoctorAPI = require("./src/api/doctor.api");

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true
}))
connectDB();

app.get("/", (req, res) => {
    res.send("Hello Node!");
});

app.use("/user", UserAPI());
app.use("/appointment", AppointmentAPI());
app.use("/patient", PatientAPI());
app.use("/doctor", DoctorAPI());
app.use("/doctorPresc", DoctorPrescAPI());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});