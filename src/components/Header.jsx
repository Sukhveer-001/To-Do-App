import React from 'react'

function Header(props) {
  const { todos } = props
const isComplete = todos.filter((todo) => !todo.complete).length;
  const taskOrTasks = isComplete ===1 ? "task" : "tasks"
  console.log(isComplete)
  return (
    <>
      
      <h1 className="text-gradient">
        You have {isComplete} open {taskOrTasks}
      </h1>
    </>
  );
}

export default Header