import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from '../../styles/novaTarefaModal/novaTarefa.module.scss';

const Modal = () => (
    <Popup trigger={<button className={styles.btn}> Adicionar nova tarefa </button>} modal>
      <span> Modal content </span>
    </Popup>
  );

  export default Modal;