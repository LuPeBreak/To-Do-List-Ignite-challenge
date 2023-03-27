import { Task } from "../../App";
import styles from "./TaskList.module.css";
import { useState } from "react";
import { TaskCard } from "./Task/TaskCard";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }: TaskListProps) => {
  const numberOfCompletedTasks = tasks.reduce(
    (counter, task) => (task.isComplete ? ++counter : counter),
    0
  );

  return (
    <div className={styles.taskList}>
      <div className={styles.tasksInfo}>
        <span className={styles.createdTasksInfo}>
          Tarefas criadas<span>{tasks.length}</span>
        </span>
        <span className={styles.completedTasksInfo}>
          Concluídas
          <span>
            {numberOfCompletedTasks} de {tasks.length}
          </span>
        </span>
      </div>
      <div className={styles.list}>
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};
