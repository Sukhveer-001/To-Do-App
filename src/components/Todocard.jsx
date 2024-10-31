import React from "react";

function Todocard(props) {
  const { todo, deleteHandler, completeHandler, todoIndex } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          disabled={todo.complete}
          onClick={() => {
            completeHandler(todoIndex);
          }}
        >
          Done
        </button>
        <button onClick={() => deleteHandler(todoIndex)}>Delete</button>
      </div>
    </div>
  );
}

export default Todocard;
