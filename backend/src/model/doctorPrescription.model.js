const mongoose = require("mongoose");

const DoctorPrescSchema = new mongoose.Schema({
    // name: { type: String, required: true },
    symptoms:{type:String,required: true},
    prescription:{type:String,required: true},
    // description: { type: String, required: true },
    // type: { type: String, required: true },
    // date: { type: String, required: true },
    // time: { type: String, required: true },

});

const DoctorPresc = mongoose.model('doctorPresc', DoctorPrescSchema);
module.exports = DoctorPresc;