import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ProjectCard from "../components/ProjectCard";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const images = require.context('../../public/images', true);

class Projects extends React.Component {
    constructor() {
        super();
        var projects = this.getProjectDetails();
        this.state={
            projects: projects,
            galleryOpen: false,
            selectedProject: { pics :[]}
        };

        this.onTileClick = this.onTileClick.bind(this);
        this.onClose = this.onClose.bind(this);
        
    }
    onTileClick(info) {
        var imgs = [];
        for (var i = 1; i <= info.count; i++) {
            var d = info.dir + "img" + i + ".jpg";
            imgs.push(images(d));
        }
        info.pics = imgs;

        this.setState({
            galleryOpen: true,
            selectedProject:info
        });
    }

    onClose() {
        this.setState({
            galleryOpen: false
        })
    }
    render() {
        return <div>
            <nav class="navbar navbar-expand-lg  navbar-light bg-light">
                <a class="navbar-brand" href="#">Master Class Constructions</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ml-auto" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="About">About Us</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="Projects">Projects <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" class="btn btn-primary" href="Contact">Contact Us</a>

                        </li>
                    </ul>
                </div>
            </nav>

            <Dialog class="dialog" onClose={this.onClose} open={this.state.galleryOpen}>
                <DialogTitle className="dialogTitle">{ this.state.selectedProject.title}</DialogTitle>
                <Carousel >
   
                        {
                            this.state.selectedProject.pics.map(i => {
                                return <CarouselItem key={i} >
                                    <img class="d-block w-100" src={i} alt="First slide"></img>
                                </CarouselItem>
                            })
                        }
                </Carousel>
            </Dialog>
            <div class="container">
                <Accordion
                    defaultExpanded={true}                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Ongoing Projects</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div class="row">
                            {
                                this.state.projects.ongoing.map(p => {
                                    return   <ProjectCard key={p.title} info={p} tileClick={this.onTileClick}/>
                            })
                            }
                        </div>
                    </AccordionDetails>

                </Accordion>
                <Accordion
                    defaultExpanded={true}                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}

                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Completed Projects</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div class="row">
                            {
                                
                                this.state.projects.completed.map(p => {

                                    return <ProjectCard key={p.title} info={p} tileClick={this.onTileClick} />
                                })
                            }
                        </div>
                    </AccordionDetails>

                </Accordion>
            </div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,marginTop:"20px" }} elevation={5}>
                <BottomNavigation
                    showLabels >
                    <BottomNavigationAction label="Email" icon={<EmailIcon />} onClick={(e) => {
                        window.open('mailto:test@example.com');
                    }} />
                    <BottomNavigationAction label="Phone" icon={<LocalPhoneIcon />} onClick={(e) => { document.location.href = "tel:+375292771265"; }} />
                    <BottomNavigationAction label="Location" icon={<LocationOnIcon />} onClick={(e) => { window.open("https://maps.google.com/?q=13.0351104,77.5585792") } }/>
                </BottomNavigation>
            </Paper>
            </div>
    }
    getProjectDetails() {
        var completed = [{
            title: "Airport Backfilling",
            description: "",
            titleImage: images("./Completed/Airport Backfilling/title.jpg"),
            dir: "./Completed/Airport Backfilling/",
            count:7
        },
            {
                title: "Fabrications",
                description: "",
                titleImage: images("./Completed/Fabrications/title.jpg"),
                dir: "./Completed/Fabrications/",
                count: 9
            },
            {
                title: "Annapurneshwari Nagar",
                description: "",
                titleImage: images("./Completed/Annapurneshwari nagar/title.jpg"),
                dir: "./Completed/Annapurneshwari nagar/",
                count: 7
            },
            {
                title: "Jalahalli",
                description: "",
                titleImage: images("./Completed/Jalahalli/title.jpg"),
                dir: "./Completed/Jalahalli/",
                count: 18
            },
            {
                title: "Narayana College",
                description: "",
                titleImage: images("./Completed/Narayana College/title.jpg"),
                dir: "./Completed/Narayana College/",
                count: 7
            },
            {
                title: "Painting",
                description: "",
                titleImage: images("./Completed/Painting/title.jpg"),
                dir: "./Completed/Painting/",
                count: 5
            },
            {
                title: "Renovation",
                description: "",
                titleImage: images("./Completed/Renovation/title.jpg"),
                dir: "./Completed/Renovation/",
                count: 17
            },
            {
                title: "Terrace Waterproofing",
                description: "",
                titleImage: images("./Completed/Terrace waterproofing/title.jpg"),
                dir: "./Completed/Terrace waterproofing/",
                count: 6
            }

        ];
        var ongoing = [];
        return {
            completed: completed,
            ongoing: ongoing
        };
    }
}
export default Projects  