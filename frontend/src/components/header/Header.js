import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Header() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate()
    console.log(user)
    function logout() {
        sessionStorage.removeItem('user')
        navigate('/')
    }

    return (
        <header>

            <div className='logo'>
                <h1><Link to="/">MediLab HMS</Link></h1>
            </div>
            {
                user && user.role == "patient" &&
                <ul>
                    <li><Link to='/dashboardpatient'> DashboardPatient </Link></li>
                    {/* <li><Link to='/appointmentpatient'> AppointmentPatient </Link></li> */}
                    {/* <li><Link to='/contactus'> Contact Us </Link></li> */}
                    {/* <li><Link to='/aboutus'> About Us </Link></li> */}
                    <li><Link to='/patientprofile'> Patient Profile </Link></li>



                        <li onClick={() => { logout() }}><Link to='/'> Logout </Link></li>

                </ul>

            }

            {
                user && user.role == "doctor" &&
                <ul>
                    <li><Link to='/dashboarddoctor'> DashboardDoctor </Link></li>
                    {/* <li><Link to='/contactus'> Contact Us </Link></li> */}
                    {/* <li><Link to='/aboutus'> About Us </Link></li> */}
                    <li><Link to='/doctorprofile'> DoctorProfile </Link></li>
                    {/* <li><Link to='/appointmentinformation'> AppoinmentInformation </Link></li> */}



                    <li onClick={() => { logout() }}><Link to='/'> Logout </Link></li>
                </ul>

            }
            {
                !user &&
                <ul>
                    <li><Link to='/contactus'> Contact Us </Link></li>
                    <li><Link to='/aboutus'> About Us </Link></li>


                    <li><Link to='/login'> Sign In </Link></li>
                    <li><Link to='/register'> Sign Up </Link></li>
                </ul>

            }
        </header>
    )
}

export default Header



