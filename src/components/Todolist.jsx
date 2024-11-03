import React from "react";
import Todocard from "./Todocard";

function Todolist(props) {
  const { todos, selectedTab } = props;
  const tab = selectedTab;
  const filteredList =
    selectedTab === "All"
      ? todos
      : tab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filteredList.map((todo, todoIndex) => {
        return (
          <Todocard
            key={todo.id}
            todo={todo}
            {...props}
            todoIndex={todoIndex}
          ></Todocard>
        );
      })}
    </>
  );
}

export default Todolist;
