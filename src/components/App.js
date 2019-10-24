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

  addTodoItem({ id = this.state.items.length + 1, text, completed = false }) {
    let todo = {id, text, completed};
    this.handelEasterEgg({
      text: todo.text, callback: (text) => {
        todo.text = text;
        let items = this.state.items;
        items.push(todo);
        this.setState({ items: items })
      }
    })
  }

  handelEasterEgg({ callback, text }) {
    switch (text.toUpperCase()) {
      case 'CHUCK':
        fetch('https://api.chucknorris.io/jokes/random')
          .then(response => response.json())
          .then((data) => {
            callback(data.value);
          });
        break;

      default:
        callback(text);
        break;
    }
  }

  render() {
    let items = this.state.items;
    return (
      <div className="app container mt-3 mb-3" >
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">ToDo</h5>

            <div className="row border-top">
              <div className="col">
                <TodoList items={items} />
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
