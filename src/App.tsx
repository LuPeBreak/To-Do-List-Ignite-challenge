import { useState } from "react";

import styles from "./App.module.css";
import logo from "./assets/logo.svg";

function App() {
  const [taskList, setTaskList] = useState([
    {
      title: "task",
      checked: true,
    },
  ]);

  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="Logo to do" />
      </header>
      <main>
        <div></div>
        <div></div>
      </main>
    </div>
  );
}

export default App;
