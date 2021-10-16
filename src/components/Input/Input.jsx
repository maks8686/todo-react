import React from "react";
import { useState } from "react";

export const Input = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const onKeyPress = (e) => {
    if (e.code === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <div onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={onKeyPress}
        placeholder="Введи задачу"
      />
      <button onClick={handleSubmit}>+</button>
    </div>
  );
};
