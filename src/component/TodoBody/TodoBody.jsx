import { React, useState } from "react";
import { TodoFilter } from "./TodoFilter/TodoFilter";
import { TodoInsert } from "./TodoInsert/TodoInsert";
import { TodoList } from "./TodoList/TodoList";
import styles from "./TodoBody.module.scss";

let idC = 0;
export function TodoBody() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const onSubmit = (value) => {
    setTodos([
      ...todos,
      {
        id: idC++,
        content: value,
        isCompleted: false,
      },
    ]);
  };

  const onToggle = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    );
  };

  const filterIsCompleted = filter === "COMPLETED";

  const filtered =
    filter === "ALL"
      ? todos
      : todos.filter((todo) => todo.isCompleted === filterIsCompleted);

  const onFilterChange = (filter) => {
    setFilter(filter);
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className={styles.section}>
      <TodoInsert onSubmit={onSubmit} />
      <TodoList todos={filtered} onToggle={onToggle} onDelete={onDelete} />
      <TodoFilter onFilterChange={onFilterChange} />
    </section>
  );
}
