const Patient = require("../model/patientProfile.model")

const createPatientProfile = async (req, res) => {
    if (req.body) {

        const data = {
            email: req.body.email,
            nic: req.body.nic,
            gender: req.body.gender,            
            dateofbirth: req.body.dateofbirth,
            bloodgroup: req.body.bloodgroup,
            alergiccondition: req.body.alergiccondition,
        }

        const patient = new Patient(data);

        await patient.save()
            .then(data => res.status(200).send({ data: data }))
            .catch(err => res.send(err));

    }
}

const getProfile = async (req, res) => {
    const id = req.params.id
    await Patient.find({ email: id })
        .then((data) => { res.status(200).send(data) })
    .catch((err)=> console.log(err))
}


const updateProfile = async (req, res) => {
     if (req.body) {
         let id = req.params.id;
         //console.log(id+"sc")
         await Patient.findByIdAndUpdate(id, req.body)
             .then((data) => {
                 res.status(200).send(data);
             })
             .catch((err) => {
                 res.send(error);
             });
     }
 }


module.exports = {
    createPatientProfile: createPatientProfile,
    getProfile:getProfile,
    updateProfile:updateProfile
}