import React from 'react';
import construction from "../img/construction.jpg";
import "../css/About.css";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
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
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="About">About Us <span class="sr-only">(current)</span></a>
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
            <div class="row">
                    <div class="col-sm-12 col-lg-6 imageContainer">
                        <img src={construction} id="leftImage"/>
                    </div>
                    <div class="col-sm-12 col-lg-6 textContainer">
                    <h2 id="title">About Us</h2>
                    <p id="description">We established our company in the year 2016 as a startup, but now we have become a well-known construction company.
                        We provide the best of services to our clients. So, you can totally rely on us about the products that have been used and the services you will get. Also, we assure you that you will get on-time service.
                        As a construction company, we work really hard and give our clients the best and fast service. Choosing us will surely give you the best of everything.

                        VSS Construction is a leader in providing value-added construction services to our customers by creating a successful partnership with them throughout the constructions process.
                        Our pledge is to establish lasting relationships with our customers by exceeding their expectations and gaining their trust through exceptional performance by every member of the construction team.
                    </p>
                </div>
            </div>
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