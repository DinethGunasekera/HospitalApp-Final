const DoctorPresc = require("../model/doctorPrescription.model");

//Add New Doctor Prescription
const createDoctorPresc = async (req, res) => {
    console.log(req.body)
    if (req.body) {

        const data = {
            symptoms:req.body.symptoms,
            prescription:req.body.prescription,
            // description: req.body.description,
            // date: req.body.date,
            // time: req.body.time,

        }
        const doctorPresc = new DoctorPresc(data);

        await doctorPresc.save()
            .then(data => res.status(200).send({ data: data }))
            .catch(err => res.send(err));

    }
}

//get All Doctor Prescriptions
const getAllDoctorPrescs = async (req, res) => {
    await DoctorPresc.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

module.exports = {
    createDoctorPresc: createDoctorPresc,
    getAllDoctorPrescs: getAllDoctorPrescs,
}