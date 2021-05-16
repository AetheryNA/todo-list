import React, { useState } from 'react';

function Todo({ todo }) {
  return(
    <div className="todo-item">
      { todo.text }
    </div>
  );
};

function List() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  return (
    <div className="list">
      <div className="container">
        <div className="list__add-item">
          <input type="text" name="todoItem" />
          <button className="list__submit" id="list-submit"> Submit </button>
        </div>

        <div className="list__todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
