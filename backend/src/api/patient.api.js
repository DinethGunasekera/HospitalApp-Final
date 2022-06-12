const express = require('express');
const router = express.Router();
const PatientController = require('../controller/patient.controller');

module.exports = function (){
    router.post('/create', PatientController.createPatientProfile);
    router.get('/:id', PatientController.getProfile);
    router.put('/update/:id', PatientController.updateProfile);

    // router.put('/update/:id', AppointmentController.updateAppointment);
    return router;
}
