import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 0,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

function DashboardDoctor() {

  // const user = JSON.parse(sessionStorage.getItem("user"))
  const [searchTerm, setSearchTerm] = useState("");
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    if (!searchTerm) {
    function getAllAppointments() {
      axios.get("http://localhost:5000/appointment/").then((res) => {
        setAppointments(res.data);
      }).catch((err) => {
        alert(err.message);
        console.log(err.message);
      })
    }
    getAllAppointments()
  }
  }, [])

  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    function getAllDoctors() {
      axios
        .get("http://localhost:5000/doctor/")
        .then((res) => {
          // setDoctors(res.data);
        })
        .catch((err) => {
          alert(err.message);
          console.log(err.message);
        });
    }
    getAllDoctors();
  }, []);

  return (
    <div>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            height: 300,
          }}
        >
          <Item sx={{ flexGrow: 2 }}>
            <p>
              Welcome !<br></br> Mr. {user.fullName}
            </p>
            <br></br>

            <p>You have 2 Appointments today!</p>
            <button class="btn btn-outline-success" type="submit">
              Check Today's Appointments
            </button>

            {/* <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search for Specialization" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}
          </Item>
        </Box>

        <br></br>

        <div class="row">

          <div class="col-8 col-sm-8 col-md-4 col-lg-4 mb-2">
            {appointments.map((appointment) => (

        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
            component="img"
            height="140"
            image="assets/img/Card1.jpg"
            alt="green iguana"
          /> */}

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {appointment.patientID}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {appointment. doctorID}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {appointment.description}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {appointment.date}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {appointment.time}
            </Typography>
          </CardContent>

          <CardActions>
            <Link to={`/appointmentinformation/`}>
            {/* <Link to={`/appointmentinformation/${appointment._id}`}> */}
              <Button size="small">View Appointment</Button>
            </Link>
          </CardActions>
        </Card>
          ))}
          </div>
          </div>
      </div>
    </div>
  );
}

export default DashboardDoctor;
