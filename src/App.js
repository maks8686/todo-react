import React from "react";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import { useState } from "react";
import { nanoid } from "nanoid";
import { StyledApp } from "./App.styles";

export function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: nanoid(),
        text: userInput,
        done: false,
        date: new Date(Date.now()).toLocaleString("en-GB"),
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const doneTaskArr = [...todos.filter((todo) => todo.done)];
  const activeTaskArr = [...todos.filter((todo) => !todo.done)];

  const toggleDoneTask = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      ),
    ]);
  };
  return (
    <StyledApp>
      <Title />
      <Input addTask={addTask} />
      {[...activeTaskArr, ...doneTaskArr].map((todo) => {
        return (
          <Task
            key={todo.id}
            todo={todo}
            toggleDoneTask={toggleDoneTask}
            removeTask={removeTask}
          />
        );
      })}
    </StyledApp>
  );
}
