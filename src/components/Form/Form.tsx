import React from "react";
import { FiPlusCircle } from "react-icons/fi";

import styles from "./Form.module.css";

export const Form: React.FC = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <FiPlusCircle  size={16} />
      </button>
    </form>
  );
};
