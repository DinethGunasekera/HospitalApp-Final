import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
} from "../../utils/validation/Validation";

const initialState = {
  name: "",
  email: "",
  password: "",
  cf_password: "",
  err: "",
  success: "",
};

function Register() {
  const [patient, setPatient] = useState(initialState);

  const { name, email, password, cf_password, err, success } = patient;
  const [role, setRole] = useState('');

  const handleChange = (e) => {
    setRole(e.target.value);
  }

  const handleChangeInput = e => {
    const { name, value } = e.target;
    console.log("dd", name, value)
    setPatient({ ...patient, [name]: value, err: "", success: "" });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("first", name,
      email,
      password)
    if (isEmpty(name) || isEmpty(password))
      return setPatient({
        ...patient,
        err: "Please fill in all the fields!",
        success: "",
      });

    if (!isEmail(email))
      return setPatient({ ...patient, err: "Invalid Emails.", success: "" });

    if (isLength(password))
      return setPatient({
        ...patient,
        err: "Password must contain at least 6 characters!",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setPatient({
        ...patient,
        err: "Passwords did not match!",
        success: "",
      });

    console.log("role", role)
    try {
      const res = await axios.post("http://localhost:5000/user/create", {
        "fullName": name,
        "email": email,
        "password": password,
        "role": role
      });
      console.log(res)
      setPatient({ ...patient, err: "", success: res.data.message });
    } catch (err) {
      err.response.data.msg &&
        setPatient({ ...patient, err: err.response.data.message, success: "" });
    }
  };



  return (
    <div className="login_page">
      <h2>Register</h2>

      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}

      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            value={name}
            name="name"
            onChange={handleChangeInput}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            placeholder="Enter email address"
            id="email"
            value={email}
            name="email"
            onChange={handleChangeInput}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            value={password}
            name="password"
            onChange={handleChangeInput}
          ></input>
        </div>

        <div>
          <label htmlFor="cf_password">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            id="cf_password"
            value={cf_password}
            name="cf_password"
            onChange={handleChangeInput}
          ></input>
        </div>


        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={handleChange} 
          >
            <FormControlLabel value="patient" control={<Radio />} label="Patient" />
            <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
          </RadioGroup>
        </FormControl>

        <div className="row">
          <button type="submit"> Register </button>
        </div>
      </form>

      <p>
        Already have an account? <Link to="/login">Login here!</Link>
      </p>
    </div>
  );
}

export default Register;
