import React,{useState} from "react";
import axios from "axios";

export default function AddPatient(){

    const [name, setName] = useState ("");
    const [age, setAge] = useState ("");
    const [gender, setGender] = useState ("");


    function sendData(e){
        e.preventDefault();
        
        const newPatient ={
            name,
            age,
            gender
        }
        
        axios.post("http://localhost:8070/patient/add", newPatient).then(()=>{
            alert("Patient Added")
        }).catch((err)=>{
            alert(err);
        })
    }


    return(
        <div className = "container">
            <form onSubmit={sendData}>
            <div className="form-group">

                <label for="name" className="form-label">Patient Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Patient Name" 
                onChange={(e)=>{

                    setName(e.target.value);

                }}/>

            </div>

            <div className="form-group">

                <label for="age" className="form-label">Patient Age</label>
                <input type="text" className="form-control" id="age" placeholder="Enter Patient Age"
                onChange={(e)=>{
                    
                    setAge(e.target.value);

                }}/>
            </div>

            <div className="form-group">

                <label for="gender" className="form-label">Patient Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter Patient Gender"
                onChange={(e)=>{
                    
                    setGender(e.target.value);

                }}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}