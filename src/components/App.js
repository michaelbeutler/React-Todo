import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './TodoItem';

const App = () => {
  return (
    <div className="app container mt-2 p-5 ">
      <h1>Simple ToDo App</h1>
      <ul className="list-group list-group-flush">
        <TodoItem id={1} text={"Test todo"} />
      </ul>
    </div>
  );
}

export default App;
