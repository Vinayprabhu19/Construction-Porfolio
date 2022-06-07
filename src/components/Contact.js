import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import contact from "../img/contact.jpg";

import "../css/Contact.css";
class Projects extends React.Component {
    render() {
        return <div>
            <nav class="navbar navbar-expand-lg  navbar-light bg-light">
                <a class="navbar-brand" href="#">Master Class Constructions</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ml-auto" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ">
                            <a class="nav-link" href="/">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="About">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" class="btn btn-primary" href="Contact">Contact Us</a>

                        </li>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <h2 id="title">Contact Us</h2>
                
                <p id="content">
                                        <span class="header">Master Class Constructions </span><br></br>
                    <span class="header"> Address : </span>   No.168   , RHBCS Layout, 2nd Stage,'B' Block, Srigandhadakavalu,
                     Bangalore - 560091   <br></br>
                    <span class="header"> Phone :</span>   +91-966 369 7844 <br></br>
                    <span class="header"> Email :</span>  Constructions.masterclass@gmail.com<br></br>
                    </p>
            </div>
            {/*<div>
                <img src={contact } id="contactImg"></img>
            </div>*/}
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
                <BottomNavigation
                    showLabels >
                    <BottomNavigationAction label="Email" icon={<EmailIcon />} onClick={(e) => {
                        window.open('mailto:test@example.com');
                    }} />
                    <BottomNavigationAction label="Phone" icon={<LocalPhoneIcon />} onClick={(e) => { document.location.href = "tel:+375292771265"; }} />
                    <BottomNavigationAction label="Location" icon={<LocationOnIcon />} onClick={(e) => { window.open("https://maps.google.com/?q=13.0351104,77.5585792") }} />
                </BottomNavigation>
            </Paper>
            </div>
    }
}
export default Projects  