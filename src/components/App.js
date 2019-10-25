import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addTodoItem = this.addTodoItem.bind(this);
  }

  componentDidMount() {
    let eggs = ["CHUCK", "CHUCK", "CHUCK", "CAT", "CAT", "CAT", "KANYE"];
    let c = [true, false, false, false];

    for (let i = 0; i < Math.floor(Math.random() * 8 + 4); i++) {
      this.addTodoItem({ id: i, text: eggs[Math.floor(Math.random() * eggs.length)], completed: c[Math.floor(Math.random() * c.length)] });
    }
  }

  addTodoItem({ id = this.state.items.length + 1, text, completed = false }) {
    let todo = { id, text, completed };
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
      case 'CHUCK NORRIS':
      case 'CHUCK':
      case 'JOKE':
        fetch('https://api.chucknorris.io/jokes/random')
          .then(response => response.json())
          .then((data) => {
            callback("laugh at a good joke: " + data.value);
          });
        break;

      case 'MEOW':
      case 'CAT':
        fetch('https://meowfacts.herokuapp.com/')
          .then(response => response.json())
          .then((data) => {
            callback("read this random cat fact: " + data.data);
          });
        break;

      case 'KANYE WEST':
      case 'KANYE':
        fetch('https://api.kanye.rest')
          .then(response => response.json())
          .then((data) => {
            callback("read this random kanye west quote: " + data.quote);
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
