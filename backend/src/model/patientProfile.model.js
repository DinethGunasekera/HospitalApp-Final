const mongoose = require("mongoose");

const PatientProfileSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    nic: { type: String},
    gender: { type: String},
    dateofbirth: { type: String},
    bloodgroup: { type: String},
    alergiccondition: { type: String}
});

const Patient = mongoose.model('patientprofile', PatientProfileSchema);
module.exports = Patient;