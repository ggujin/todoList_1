import { React, useState } from "react";
import styles from "./TodoInsert.module.scss";

export function TodoInsert({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") return null;
    onSubmit(value);
    setValue("");
  };

  return (
    <form className={styles.inputWrap} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
}
