import React, { ChangeEvent, FormEvent, useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";

import styles from "./Form.module.css";

interface FormProps {
  onAddTask: (taskTitle: string) => void;
}

export const Form: React.FC<FormProps> = ({ onAddTask }: FormProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(newTaskTitle);
  }

  function handleNewTaskTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={newTaskTitle}
        onChange={handleNewTaskTitleChange}
        name="taskTitle"
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        Criar <HiOutlinePlusCircle size={16} />
      </button>
    </form>
  );
};
