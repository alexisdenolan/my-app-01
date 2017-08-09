import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
        
    render() {
        return (
            <li className="Todo">
                <code>{this.props.todo.id}</code> - 
                <strong> {this.props.todo.title}</strong>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object
}

export default TodoItem;
