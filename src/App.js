import styles from './App.module.scss';

import { TodoHeader, TodoBody } from './component';

function App() {
  return (
    <div className={styles.App}>
      <TodoHeader />
      <TodoBody />
    </div>
  );
}

export default App;
