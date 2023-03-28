import { HiOutlineTrash } from "react-icons/hi";
import { Task } from "../../../App";

import styles from "./TaskCard.module.css";

interface TaskCardProps {
  task: Task;
  onDeleteTask?: () => void;
  onChangeIsComplete?: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onDeleteTask,
  onChangeIsComplete,
}: TaskCardProps) => {
  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        checked={task.isComplete}
        onChange={onChangeIsComplete}
      ></input>
      <span className={styles.title}>{task.title}</span>
      <button onClick={onDeleteTask} className={styles.deleteButton}>
        <HiOutlineTrash size={16} />
      </button>
    </div>
  );
};
