import React, { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import DoctorPresc from '../../../backend/src/model/doctorPrescription.model';


function AppoinmentInformation() {

  const user = JSON.parse(sessionStorage.getItem("user"))
  let params = useParams()
  const [symptoms,setSymptom] = useState("")
  const [prescription, setPrescription] = useState("");
  // const [time, setTime] = useState("");
  // const [msg, setMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault()
    console.log(symptoms, prescription)

    try {
      const res = await axios.post("http://localhost:5000/doctorPresc/create", {
        "patientID":user._id,
        "symptoms":symptoms,
        "prescription": prescription,
        // "time": time,
        // "description": msg,
      });
      console.log(res)
      // setPatient({ ...patient, err: "", success: res.data.message });
    } catch (err) {
      console.log(err)
      // err.response.data.msg &&
      // setPatient({ ...patient, err: err.response.data.message, success: "" });
    }

}


  return (
    <div class="container">
      <div class="main-body"> <br></br>
        <div class="row gutters-sm">
          <Container>
            <Row>
              <Col sm={4}>
                <div class="card"> <br></br>
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                      <div class="mt-3">


                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={8}>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    Dineth
                  </div>
                </div>
                <hr></hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Blood Group</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    B-
                  </div>
                </div>
                <hr></hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Message</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    Prawn Allergy
                  </div>
                </div>
                <hr></hr>
                {/* <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Mobile</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    +94 76 607 929
                  </div>
                </div>
                <hr>
                </hr> */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <br></br>
      <h2>Doctor's Prescription</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>

      <Form  onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Symptoms" onChange={e => setSymptom(e.target.value)} value={symptoms} class="form-control" id="inputMessage"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Prescription" onChange={e => setPrescription(e.target.value)} value={prescription} class="form-control" id="inputMessage"/>
        </Form.Group>
        <p>Thank You!</p>

        <button class="btn btn-primary px-4" value="Submit" onClick={e => onSubmit(e)} type="submit"> Submit </button>

      </Form>

      {/* {err && showErrMsg(err)} */}
      {/* {success && showSuccessMsg(success)} */}

    </div>



  )

}

export default AppoinmentInformation;
