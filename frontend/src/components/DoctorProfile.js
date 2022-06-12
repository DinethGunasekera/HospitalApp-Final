import React, { useState,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import axios from "axios";


function DoctorProfile() {
	const user = JSON.parse(sessionStorage.getItem("user"))
	const [nic, setNIC] = useState('')
	const [gender, setGender] = useState('')
	const [specialization, setSpecialization] = useState('')
	const [aboutme, setAboutMe] = useState('')
	const [availabledays, setAvailableDays] = useState('')
	const [availabletime, setAvailableTime] = useState("")
	const [profile, setProfile] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(user.fullName,"ggwp")
		const newDoctor = {
			email: user.email,
			name:user.fullName,
			nic: nic,
			gender: gender,
			specialization: specialization,
			aboutme: aboutme,
			availabledays: availabledays,
			availabletime: availabletime,
		}
		console.log(newDoctor, "safasf")
		axios.post("http://localhost:5000/doctor/create", newDoctor).then(() => {
			alert("Doctor profile Added")
		}).catch((err) => {
			alert(err);
		})
	}

	const handleEdit = (e) => {
		e.preventDefault()
		console.log(user.fullName,"ggwp")
		const newDoctor = {
			email: user.email,
			name:user.fullName,
			nic: nic,
			gender: gender,
			specialization: specialization,
			aboutme: aboutme,
			availabledays: availabledays,
			availabletime: availabletime,
		}
		console.log(newDoctor, "safasf")
		console.log(profile[0]._id,'id')
		axios.put(`http://localhost:5000/doctor/update/${profile[0]._id}`, newDoctor).then(() => {
			alert("Patient updated")
		}).catch((err) => {
			alert(err);
		})
	}

	useEffect(() => {
		function getDoctor() {
			axios.get(`http://localhost:5000/doctor/${user.email}`).then((res) => {
				setProfile(res.data);
			}).catch((err) => {
				alert(err.message);
				console.log(err.message);
			})
		}
		getDoctor()
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
														<p class="text-muted font-size-sm">{profile[0].nic}</p>
														<p class="text-muted font-size-sm">{profile[0].gender}</p>
														<p class="text-muted font-size-sm">{profile[0].specialization}</p>
														<p class="text-muted font-size-sm">{profile[0].aboutme}</p>
														<p class="text-muted font-size-sm">{profile[0].availabledays}</p>
														<p class="text-muted font-size-sm">{profile[0].availabletime}</p>
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
												<h6 class="mb-0">Specialization</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												{profile.length>0 ?
													<input type="text" id="dob" name="dob" value={specialization} placeholder={profile[0].specialization} onChange={(e) => setSpecialization(e.target.value)} />
													:
													<input type="text" id="dob" name="dob" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
												}
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">About Me</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												{profile.length>0 ?
													<input type="text" id="bgroup" name="bgroup" value={aboutme} placeholder={profile[0].aboutme} onChange={(e) => setAboutMe(e.target.value)} />
													:
													<input type="text" id="bgroup" name="bgroup" value={aboutme} onChange={(e) => setAboutMe(e.target.value)} />

												}
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">Available Days</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												{profile.length>0 ?
													<input type="text" id="acondition" name="acondotion" value={availabledays} placeholder={profile[0].availabledays} onChange={(e) => setAvailableDays(e.target.value)} />
													:
													<input type="text" id="acondition" name="acondotion" value={availabledays} onChange={(e) => setAvailableDays(e.target.value)} />
												}
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">Available Time</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												{profile.length>0 ?
													<input type="text" id="acondition" name="acondotion" value={availabletime} placeholder={profile[0].availabletime} onChange={(e) => setAvailableTime(e.target.value)} />
													:
													<input type="text" id="acondition" name="acondotion" value={availabletime} onChange={(e) => setAvailableTime(e.target.value)} />
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

		</div>




	)

}
export default DoctorProfile;