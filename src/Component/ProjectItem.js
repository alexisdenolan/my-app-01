import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    deleteProject(id) {
        this.props.onDelete(id);
    }
    
    render() {
        return (
            <li className="Project">
                <code>{this.props.project.id}</code> - 
                <strong> {this.props.project.title}</strong> - {this.props.project.category} - 
                <a href="#/" onClick={this.deleteProject.bind(this, this.props.project.id)}> Remove</a>
            </li>
        );
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
}

export default ProjectItem;
