import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Todolist from "./components/Todolist";
import TodoInput from "./components/TodoInput";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  const saveHandler = (currTodos) => {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  };

  const addHandler = (newTodo) => {
    const newTodoList = [
      ...todos,
      { id: Date.now(), input: newTodo, complete: false },
    ];
    setTodos(newTodoList);
    saveHandler(newTodoList);
  };

  const completeHandler = (id) => {
    console.log("completeHandler called with id:", id);
    const newtodoList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newtodoList);
    saveHandler(newtodoList);
  };
  const deleteHandler = (id) => {
    let newtodoList = todos.filter((val) => {
      return val.id !== id;
    });
    setTodos(newtodoList);
    saveHandler(newtodoList);
  };

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Todolist
        todos={todos}
        selectedTab={selectedTab}
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
      />
      <TodoInput addHandler={addHandler} />
    </>
  );
}

export default App;
