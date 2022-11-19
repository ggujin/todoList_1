import React from "react";
import styles from "./TodoList.module.scss";
import cx from "classnames";

export function TodoList({ todos, onToggle, onDelete }) {
  if (todos?.length === 0) return null;

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <li
          className={cx(
            styles.listItem,
            todo.isCompleted ? styles.completed : null
          )}
          style={{ opacity: todo.isCompleted ? ".5" : "1" }}
          key={todo.id}
        >
          <div className={styles.checkWrap}>
            <input
              type="checkbox"
              defaultChecked={todo.isCompleted}
              onClick={() => onToggle(todo.id)}
            />
          </div>
          <span className={styles.content}>{todo.content}</span>
          <span className={styles.removeBtn} onClick={() => onDelete(todo.id)}>
            삭제
          </span>
        </li>
      ))}
    </ul>
  );
}
