import React from "react";

function Todocard(props) {
  const { todo, deleteHandler, completeHandler } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          disabled={todo.complete}
          onClick={() => {
            completeHandler(todo.id);
          }}
        >
          Done
        </button>
        <button onClick={() => deleteHandler(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Todocard;
