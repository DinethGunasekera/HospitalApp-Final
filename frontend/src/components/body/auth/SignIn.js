import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
// import {dispatchLogin} from '../../../redux/actions/authAction'
// import { useDispatch } from "react-redux";


const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

function SignIn() {
  const [patient, setPatient] = useState(initialState);
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const  user = JSON.parse(sessionStorage.getItem('user'));
  //   console.log("user", user)
  // }, []);
  const navigate = useNavigate()

  const { email, password, err, success } = patient;

  const handleChangeInput = e => {
    const { name, value } = e.target
    setPatient({ ...patient, [name]: value, err: '', success: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/user/validate', { email: email, password: password })
      setPatient({ ...patient, err: '', success: res.data.message })
      sessionStorage.setItem('user', JSON.stringify(res.data.data));
      if (res.data.data.role == "patient") {
        console.log("firsddddt")
        navigate('/patientprofile')

        window.location.reload()
      } else if (res.data.data.role == "doctor") {
        console.log("dddddd")
        navigate('/dashboarddoctor')

        window.location.reload()
      }

    } catch (err) {
      console.log(err)

      err.response.data &&
        setPatient({ ...patient, err: err.response.data, success: '' })

    }
  }

  return (
    <div className="login_page">
      <h2>Login</h2>

      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}

      <form onSubmit={e => handleSubmit(e)}>
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

        <div className="row">
          <button type="submit"> Login </button>
          <Link to="/forgot_password"> Forgot your Password?</Link>
        </div>

      </form>

      <p>Don't have an account? <Link to="/register">Register here!</Link></p>

    </div>
  );
}

export default SignIn;
