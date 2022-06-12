import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img1 from '../assets/img/contactus.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
   
}));

function ContactUs (){
    return(
        <div id="page-content">
    	
    	    
			<div class="container">
				<div class="row">
					
				
					
				
				</div>

			</div> <br></br>
			{/* <Box sx={{ flexGrow: 1 }}>
		 <Grid container spacing={2}>
		   <Grid item xs={8}>
			 <Item>
				 
			</Item>
		   </Grid>
		   <Grid item xs={4}>
			 <Item> */}
			 {/* <div class="col-10 col-sm-10 col-md-6 col-lg-6 mb-2">
						<div class="open-hours">
							<h2><center>Opening Hours</center></h2><br></br>
								Mon - Sat : 9am - 11pm<br></br>
								Sunday: 11am - 5pm
						</div>
						<br></br>
						<br></br>
						<br></br>
						<hr />
                    		<ul class="addressFooter">
                        		<i class="bi bi-geo-alt"></i><p>55 Gallaxy Enque, 2568 steet, 23568 NY</p>
                        		<i class="bi bi-telephone"></i><p>(440) 000 000 0000</p>
                        		<i class="bi bi-envelope"></i><p>sales@yousite.com</p>							
							</ul>

                    	<hr />
							
					</div> */}

				
			 {/* </Item>
		   </Grid>
		  
		 </Grid>
	   </Box> */}

	   <Container>
  <Row>
    <Col sm={8}>
	<div class="page section-header">
			    {/* <div class="page-title">
        		    <div class="wrapper"><h1 class="page-width">Contact Us</h1></div>
      		    </div> */}
		    </div>
			<div class="col-10 col-sm-10 col-md-6 col-lg-6 mb-2">
			<h2><center>Contact Us</center></h2> <br></br>
						<h2><center>Drop Us A Line</center></h2> <br></br>
						<p>Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500 </p>
						<br></br>
						<br></br>
						
						<div class="formFeilds contact-form form-vertical">
						<form class="row g-3">
						<div class="col-md-6">
							<label for="inputName4" class="form-label">Name</label>
							<input type="text" class="form-control" id="inputName4"></input>
						</div>
						<div class="col-md-6">
							<label for="inputEmail4" class="form-label">Email</label>
							<input type="email" class="form-control" id="inputEmail4"></input>
						</div>
						<div class="col-12">
							<label for="inputAddress4" class="form-label">Address</label>
							<input type="text" class="form-control" id="inputAddress4" placeholder="1234 Main St"></input>
						</div>
						<div class="col-md-6">
							<label for="inputPhonenumber4" class="form-label">Phone Number</label>
							<input type="text" class="form-control" id="inputPhonenumber4"></input>
						</div>
						<div class="col-md-6">
							<label for="inputSubject4" class="form-label">Subject</label>
							<input type="text" class="form-control" id="inputSubject4"></input>
						</div>
						<div class="col-12">
							<label for="inputMessage4" class="form-label">Message</label>
							<input type="text" class="form-control" id="inputAddress4"></input>
						</div>

						<div class="col-12">
							<button type="submit" class="btn btn-primary">SEND MESSAGE</button>
						</div>
						</form>
                    	</div>
					</div>
	</Col>
    <Col sm={4}>
	<img src={img1} alt="Logo" />
	<Container>
  <Row>
    <Col>
	<div class="open-hours">
							<h2><center>Opening Hours</center></h2><br></br>
								Mon - Sat : 9am - 11pm<br></br>
								Sunday: 11am - 5pm
						</div> <br></br>
	</Col>
	
   
	<ul class="addressFooter">
                        		<i class="bi bi-geo-alt"></i><p>55 Gallaxy Enque, 2568 steet, 23568 NY</p>
                        		<i class="bi bi-telephone"></i><p>(440) 000 000 0000</p>
                        		<i class="bi bi-envelope"></i><p>sales@yousite.com</p>							
							</ul>
	
  </Row>
 
</Container>
	</Col>
  </Row>
  
</Container>
		</div>
         
    )
}

export default ContactUs;