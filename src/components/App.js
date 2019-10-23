import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          completed: false,
          text: "eat apple"
        },
        {
          id: 2,
          completed: true,
          text: "buy apple"
        },
        {
          id: 3,
          completed: true,
          text: "drink milk"
        }
      ]
    };
    this.addTodoItem = this.addTodoItem.bind(this);
  }
  addTodoItem(todo) {
    todo.id = todo.id ? todo.id : this.state.items.length + 1;
    todo.completed = todo.completed ? todo.completed : false;
    let items = this.state.items;
    items.push(todo);
    this.setState({ items: items });
  }
  render() {
    return (
      <div className="app container mt-3" >
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">ToDo</h5>

            <div className="row border-top">
              <div className="col">
                <TodoList items={this.state.items} />
              </div>
            </div>

            <div className="row border-top pt-3">
              <div className="col">
                <TodoForm add={this.addTodoItem} />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
