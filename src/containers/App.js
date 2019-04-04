import React, { Component } from 'react';
import logo from '../static/logo.svg';
import './App.css';

import Todo from '../components/Todo';
import AddTask from '../components/AddTask';

class App extends Component {
  state = {
    todos: [
      { id: 1, label: 'Wake up' },
      { id: 2, label: 'Eat breakfast', finished: true }
    ],
  };

  onSaveItem = (task) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: this.state.todos.length, label: task },
      ]
    });
  }

  onDeleteItem = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: [ ...todos ],
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <Todo todos={todos} onDeleteItem={this.onDeleteItem} />

        <AddTask onSaveItem={this.onSaveItem} />
      </div>
    );
  }
}

export default App;
