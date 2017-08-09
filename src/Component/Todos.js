import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem'

class Todos extends Component {
    render() {
        let todoItems;
        if(this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                return <TodoItem key={todo.title} todo={todo} />
            });
        }
        return (
            <div className="Todos">
                <h3>Todo List Sample101</h3>
                <label>return to committed mistake</label>
                {todoItems}
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array,
}

export default Todos;
