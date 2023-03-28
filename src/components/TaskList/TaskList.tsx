import { Task } from "../../App";
import styles from "./TaskList.module.css";
import { useState } from "react";
import { TaskCard } from "./Task/TaskCard";
import { NoTasksMessage } from "./NoTasksMessage/NoTasksMessage";

interface TaskListProps {
  tasks: Task[];
  onTaskListChange: (tasks: Task[]) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onTaskListChange,
}: TaskListProps) => {
  const hasTasks = tasks.length > 0;
  const numberOfCompletedTasks = tasks.reduce(
    (counter, task) => (task.isComplete ? ++counter : counter),
    0
  );

  function handleChangeIsComplete(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    onTaskListChange(newTasks);
  }
  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter((task) => {
      if (task.id !== id) {
        return task;
      }
    });
    onTaskListChange(newTasks);
  }

  return (
    <div className={styles.taskList}>
      <div className={styles.tasksInfo}>
        <span className={styles.createdTasksInfo}>
          Tarefas criadas<span>{tasks.length}</span>
        </span>
        <span className={styles.completedTasksInfo}>
          Concluídas
          <span>
            {hasTasks ? `${numberOfCompletedTasks} de ${tasks.length}` : 0}
          </span>
        </span>
      </div>
      <div className={styles.list}>
        {hasTasks ? (
          tasks.map((task) => {
            return (
              <TaskCard
                key={task.id}
                task={task}
                onChangeIsComplete={() => {
                  handleChangeIsComplete(task.id);
                }}
                onDeleteTask={() => {
                  handleDeleteTask(task.id);
                }}
              />
            );
          })
        ) : (
          <NoTasksMessage />
        )}
      </div>
    </div>
  );
};
