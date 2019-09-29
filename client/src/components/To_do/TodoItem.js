import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            margin: '5px',
            borderRadius: '28px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p style={{ marginBottom: '0' }}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '2px 12px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    margin: '-2px'
};

export default TodoItem