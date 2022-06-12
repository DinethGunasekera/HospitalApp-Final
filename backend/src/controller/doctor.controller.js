const Doctor = require("../model/doctorProfile.model")

const createDoctorProfile = async (req, res) => {
    if (req.body) {

        const data = {
            email: req.body.email,
            name: req.body.name,
            nic: req.body.nic,
            gender: req.body.gender,            
            specialization: req.body.specialization,
            aboutme: req.body.aboutme,
            availabledays: req.body.availabledays,
            availabletime:req.body.availabletime
        }

        const doctor = new Doctor(data);

        await doctor.save()
            .then(data => res.status(200).send({ data: data }))
            .catch(err => res.send(err));

    }
}

const getProfile = async (req, res) => {
    const id = req.params.id
    await Doctor.find({ email: id })
        .then((data) => { res.status(200).send(data) })
    .catch((err)=> console.log(err))
}

const getDoctor = async (req, res) => {
    const id = req.params.id
    await Doctor.findById(id)
        .then((data) => { res.status(200).send(data) })
    .catch((err)=> console.log(err))
}

const updateProfile = async (req, res) => {
     if (req.body) {
         let id = req.params.id;
         //console.log(id+"sc")
         await Doctor.findByIdAndUpdate(id, req.body)
             .then((data) => {
                 res.status(200).send(data);
             })
             .catch((err) => {
                 res.send(error);
             });
     }
 }

 const getAllDoctors = async (req, res) => {
    
    await Doctor.find().then((data)=>res.status(200).send(data)
        )
        .catch(error => {
            res.send(error);
        });

     
 }

 const SearchDoctor = async (req, res) => {
    console.log(req.params.id)
    await Doctor.find({'specialization': { $regex: '.*' + req.params.id + '.*' } },(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
};

 module.exports = {
    createDoctorProfile: createDoctorProfile,
    getProfile:getProfile,
    updateProfile:updateProfile,
    getAllDoctors:getAllDoctors,
    SearchDoctor:SearchDoctor,
    getDoctor:getDoctor
}