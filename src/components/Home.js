import React from 'react'
import logo from '../img/logo.png';
import "../App.css";
import "../css/Home.css";
import building1 from "../img/building1.jpg";
import soldering from "../img/soldering.jpeg";
import educational from "../img/educational.jpeg";
import residential from "../img/residential.jpeg";
import interior from "../img/interior.jpeg";
import commercial from "../img/commercial.webp";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
class Home extends React.Component {
    render() {
        return <div>
            <nav class="navbar navbar-expand-lg  navbar-light bg-light">
            <a class="navbar-brand" href="#">Master Class Constructions</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ml-auto" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
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
            <div class="container titleBlock">
                <h1>Master Class Constructions</h1>
                <h5>Master Class at work</h5>
                <p>
                    Master Class Constructions is a leading and reputable Construction Company.
                    Dedication to providing quality construction, technical and management services to our customers.
                    We will strive to implement a long term relationship with our clients, based on safety, quality, timely service and anticipation of their needs.
                    To help fulfil this mission, we will treat all employees fairly and involve them in the quality improvement process to insure responsiveness and cost-effective work execution.
                </p>
                
            </div>

                <div class="row projectTiles">
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div class="card myCard" >
                        <img class="card-img-top" src={commercial} alt="Card image cap"></img>
                            <div class="card-body">
                                <h4 class="card-title">Commercial Constructions</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div class="card myCard" >
                        <img class="card-img-top" src={educational} alt="Card image cap"></img>
                            <div class="card-body">
                            <h4 class="card-title">Educational Institutions</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div class="card myCard" >
                        <img class="card-img-top" src={residential} alt="Card image cap"></img>
                            <div class="card-body">
                            <h4 class="card-title">Residential Constructions</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div class="card myCard" >
                        <img class="card-img-top" src={interior} alt="Card image cap"></img>
                        <div class="card-body">
                            <h4 class="card-title">Interior Design</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>


            </div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
                <BottomNavigation
                    showLabels >
                    <BottomNavigationAction label="Email" icon={<EmailIcon />} onClick={(e) => {
                        window.open('mailto:test@example.com');} } />
                    <BottomNavigationAction label="Phone" icon={<LocalPhoneIcon />} onClick={(e) => { document.location.href = "tel:+375292771265"; }} />
                    <BottomNavigationAction label="Location" icon={<LocationOnIcon />} onClick={(e) => { window.open("https://maps.google.com/?q=13.0351104,77.5585792") }} />
                </BottomNavigation>
            </Paper>
           
        </div>
    }
}
export default Home  