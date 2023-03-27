import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./App.module.css";
import logo from "./assets/logo.svg";

//components
import { Form } from "./components/Form/Form";
import { TaskList } from "./components/TaskList/TaskList";

export interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([
    {
      id: uuidv4(),
      title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isComplete: true,
    },
    {
      id: uuidv4(),
      title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.2",
      isComplete: true,
    },
    {
      id: uuidv4(),
      title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.3",
      isComplete: false,
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
        <TaskList tasks={taskList} />
      </main>
    </div>
  );
}

export default App;
