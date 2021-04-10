import React, { useRef } from "react";

import "./NewTodo.css";

type NewTodoProps = {
  addTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextRef.current!.value;
    props.addTodo(enteredText);
    todoTextRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo:</label>
        <input type="text" id="todo=text" ref={todoTextRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
