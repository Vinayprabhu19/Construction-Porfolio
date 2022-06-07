import React from 'react'
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
            </div>
    }
}
export default Projects  