const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    // name: { type: String, required: true },
    patientID:{type:String,required: true},
    doctorID:{type:String,required: true},
    description: { type: String, required: true },
    // type: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },

});

const Appointment = mongoose.model('appointment', AppointmentSchema);
module.exports = Appointment;