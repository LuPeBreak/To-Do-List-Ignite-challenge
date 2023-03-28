import styles from "./NoTasksMessage.module.css";

import clipboard from '../../../assets/clipboard.svg'

export const NoTasksMessage: React.FC = () => {
  return (
    <div className={styles.noTasksMessage}>
      <img src={clipboard} alt="imagem de uma prancheta" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
