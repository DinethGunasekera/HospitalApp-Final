import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import axios from "axios";


function PatientProfile() {
	const user = JSON.parse(sessionStorage.getItem("user"))
	const [nic, setNIC] = useState('')
	const [gender, setGender] = useState('')
	const [dateofbirth, setBirth] = useState('')
	const [bloodgroup, setBloodGroup] = useState('')
	const [alergiccondition, setAlergicCondition] = useState('')
	const [profile, setProfile] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()

		const newPatient = {
			email: user.email,
			nic: nic,
			gender: gender,
			dateofbirth: dateofbirth,
			bloodgroup: bloodgroup,
			alergiccondition: alergiccondition
		}
		console.log(newPatient, "safasf")
		axios.post("http://localhost:5000/patient/create", newPatient).then(() => {
			alert("Patient profile Added")
		}).catch((err) => {
			alert(err);
		})
	}

	const handleEdit = (e) => {
		e.preventDefault()

		const newPatient = {
			email: user.email,
			nic: nic,
			gender: gender,
			dateofbirth: dateofbirth,
			bloodgroup: bloodgroup,
			alergiccondition: alergiccondition
		}
		console.log(newPatient, "safasf")
		console.log(profile[0]._id,'id')
		axios.put(`http://localhost:5000/patient/update/${profile[0]._id}`, newPatient).then(() => {
			alert("Patient updated")
		}).catch((err) => {
			alert(err);
		})
	}

	useEffect(() => {
		function getPatient() {
			axios.get(`http://localhost:5000/patient/${user.email}`).then((res) => {
				setProfile(res.data);
			}).catch((err) => {
				alert(err.message);
				console.log(err.message);
			})
		}
		getPatient()
	}, [profile])

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
												<h4>{user.fullName}</h4>
												<p class="text-secondary mb-1">{user.role}</p>
												{profile.length>0 &&
													<div>
														<p class="text-muted font-size-sm">Homagama</p>
														<p class="text-muted font-size-sm">{profile[0].nic}</p>
														<p class="text-muted font-size-sm">{profile[0].gender}</p>
														<p class="text-muted font-size-sm">{profile[0].dateofbirth}</p>
														<p class="text-muted font-size-sm">{profile[0].bloodgroup}</p>
														<p class="text-muted font-size-sm">{profile[0].alergiccondition}</p>
													</div>
												}
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col sm={8}>
								<form >
									<div class="row">
										<div class="row mb-3">

											<div class="col-sm-3">
												<h6 class="mb-0">Email</h6>
											</div>

											<div class="col-sm-9 text-secondary">
												<input type="email" disabled placeholder={user.email} id="email" name="email" />
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">NIC</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												{profile.length>0 ?
													<input type="text" id="nic" name="nic" placeholder={profile[0].nic} value={nic} onChange={(e) => setNIC(e.target.value)} />
													:
													<input type="text" id="nic" name="nic" value={nic} onChange={(e) => setNIC(e.target.value)} />
												}
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">Gender</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												{profile.length>0 ?
													<input type="text" id="gender" name="gender" value={gender} placeholder={profile[0].gender} onChange={(e) => setGender(e.target.value)} />
													:
													<input type="text" id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
												}
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">Date Of Birth</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												{profile.length>0 ?
													<input type="text" id="dob" name="dob" value={dateofbirth} placeholder={profile[0].dateofbirth} onChange={(e) => setBirth(e.target.value)} />
													:
													<input type="text" id="dob" name="dob" value={dateofbirth} onChange={(e) => setBirth(e.target.value)} />
												}
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">Blood Group</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												{profile.length>0 ?
													<input type="text" id="bgroup" name="bgroup" value={bloodgroup} placeholder={profile[0].bloodgroup} onChange={(e) => setBloodGroup(e.target.value)} />
													:
													<input type="text" id="bgroup" name="bgroup" value={bloodgroup} onChange={(e) => setBloodGroup(e.target.value)} />

												}
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">Alergic Condition</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												{profile.length>0 ?
													<input type="text" id="acondition" name="acondotion" placeholder={profile[0].alergiccondition} onChange={(e) => setAlergicCondition(e.target.value)} />
													:
													<input type="text" id="acondition" name="acondotion" onChange={(e) => setAlergicCondition(e.target.value)} />
												}
											</div>
										</div>
										<div class="row">
											<div class="col-sm-3"></div>
											<div class="col-sm-9 text-secondary">
												{profile.length>0 ?
													<button type='submit' onClick={handleEdit} >Update</button>
													:
													<button type='submit' onClick={handleSubmit}>Update</button>
												}
											</div>
										</div>
									</div>
								</form>
							</Col>
						</Row>

					</Container>



				</div>
			</div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Date</th>
						<th>Doctor</th>
						<th>Symptoms</th>
						<th>Prescription</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>03/28/2022</td>
						<td>Mr. Hiranya Ravinath</td>
						<td>Prawn Alergy</td>
						<td>Pandol</td>
					</tr>

				</tbody>
			</Table>
		</div>




	)

}
export default PatientProfile;