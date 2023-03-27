import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./App.module.css";
import logo from "./assets/logo.svg";

//components
import { Form } from "./components/Form/Form";

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: uuidv4(),
      title: "task",
      isComplete: true,
    },
    {
      id: uuidv4(),
      title: "task2",
      isComplete: true,
    },
    {
      id: uuidv4(),
      title: "task3",
      isComplete: true,
    },
  ]);

  function handleAddTask(taskTitle: string) {
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      isComplete: false,
    };
    setTaskList([...taskList, newTask]);
  }

  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="Logo to do" />
      </header>
      <main className={styles.content}>
        <Form onAddTask={handleAddTask}></Form>
        <div>
          {taskList.map((task) => {
            return <p key={task.id}>{task.title}</p>;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
