const mongoose = require("mongoose");

const DoctorProfileSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String },
    nic: { type: String},
    gender: { type: String},
    specialization: { type: String},
    aboutme: { type: String},
    availabledays: { type: String},
    availabletime: { type: String}
});

const Doctor = mongoose.model('doctorprofile', DoctorProfileSchema);
module.exports = Doctor;