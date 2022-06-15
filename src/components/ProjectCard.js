import React from 'react';
import "../css/Project.css";


class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.onTileClick = this.onTileClick.bind(this);
    }

   
   
    onTileClick() {
        this.props.tileClick(this.props.info);
    }
    
    render() {
        return <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <div class="card myCard" onClick={this.onTileClick} >
            <img class="card-img-top cardImage" src={this.props.info.titleImage} alt="Card image cap"></img>
            <div class="card-body">
                <h3 class="card-title">{this.props.info.title}</h3>
                <h6 class="card-text">{this.props.info.description}</h6>
            </div>
                </div>
        </div>
    }
}
export default ProjectCard  