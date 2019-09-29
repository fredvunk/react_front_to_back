import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import './test.css';
//import axios from 'axios';
import uuid from 'uuid';

export default class Test extends Component {

    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'Esimene ülesanne',
                completed: false
            }
        ]
    };

    // componentDidMount() {
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //         .then((res) => this.setState({ todos: res.data }));
    // }

    // Toggle Complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    // Delete
    delTodo = (id) => {
       // axios
        //    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
       //     .then((res) =>
                this.setState({
                    todos: [...this.state.todos.filter((todo) => todo.id !== id)]
                })
           // );
    };

    // Add
    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        };
        // axios
        //         //     .post('https://jsonplaceholder.typicode.com/todos', {
        //         //         title,
        //         //         completed: false
        //         //     })
         //   .then((res) => {
          //      res.data.id = uuid.v4();
                this.setState({ todos: [...this.state.todos, newTodo] });
         //   });
    };

    render() {
return (
    <div style={{ marginTop: '120px'}}> <h2 style={{ textAlign: 'center', color: '#fff' }}>Ülesanded</h2>
    <div className="todoWidth" style={{margin: '0 auto'}}>

                <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos
                        todos={this.state.todos}
                        markComplete={this.markComplete}
                        delTodo={this.delTodo}
                    />
                </React.Fragment>
    </div>
    </div>
);
    }
}
