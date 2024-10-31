import React from 'react'
import Todocard from './Todocard';

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
        <Todocard key={todoIndex} todo={todo} {...props} todoIndex={todos.findIndex(val=> val.input === todo.input)}></Todocard>
      )
    })}
    
    </>
  )
}

export default Todolist