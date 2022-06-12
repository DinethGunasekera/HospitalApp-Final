const express = require('express');
const router = express.Router();
const DoctorController = require('../controller/doctor.controller');

module.exports = function (){
    router.post('/create', DoctorController.createDoctorProfile);
    router.get('/:id', DoctorController.getProfile);
    router.put('/update/:id', DoctorController.updateProfile);
    router.get('/', DoctorController.getAllDoctors);
    router.get("/search/:id", DoctorController.SearchDoctor);
    router.get("/getDoctor/:id", DoctorController.getDoctor);


    // router.put('/update/:id', AppointmentController.updateAppointment);
    return router;
}
