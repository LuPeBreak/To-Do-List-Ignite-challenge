import { HiOutlineTrash } from "react-icons/hi";
import { Task } from "../../../App";

import styles from "./TaskCard.module.css";

interface TaskCardProps {
  task: Task;
  deleteTask?: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  deleteTask,
}: TaskCardProps) => {
  return (
    <div className={styles.task}>
      <input id={task.id} type="checkbox" checked={task.isComplete}></input>
      <span className={styles.title}>
        {task.title}
      </span>
      <button className={styles.deleteButton}>
        <HiOutlineTrash size={16} />
      </button>
    </div>
  );
};
