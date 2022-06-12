const express = require('express');
const router = express.Router();
const DoctorPrescController = require('../controller/doctorPrescription.controller');

module.exports = function (){
    router.get('/', DoctorPrescController.getAllDoctorPrescs);
    router.post('/create', DoctorPrescController.createDoctorPresc);
    // router.put('/update/:id', AppointmentController.updateAppointment);
    // router.delete('/delete/:id', AppointmentController.deleteAppointment);
    return router;
}
