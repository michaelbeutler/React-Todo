import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="app container mt-2 p-5 ">
      <h1>Simple ToDo App</h1>

      <TodoList items={
        [
          {
            id: 1,
            completed: false,
            text: "eat apple"
          },
          {
            id: 2,
            completed: true,
            text: "buy apple"
          }
        ]
      } />

    </div>
  );
}

export default App;
