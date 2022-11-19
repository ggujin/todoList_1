import React from "react";
import styles from "./TodoFilter.module.scss";

export function TodoFilter({ onFilterChange }) {
  return (
    <div className={styles.filter}>
      <button type="button" onClick={() => onFilterChange("ALL")}>
        ALL
      </button>
      <button type="button" onClick={() => onFilterChange("ACTIVE")}>
        Active
      </button>
      <button type="button" onClick={() => onFilterChange("COMPLETED")}>
        Completed
      </button>
    </div>
  );
}
