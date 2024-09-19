import React from 'react';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from '../../styles/novaTarefaModal/novaTarefa.module.scss';
import trash from '../../../public/assets/trash.png'

const ExcluirModal = () => (
    <Popup trigger={<div > 
        <Image src={trash} alt="Logo" className={styles.icone}  />
    </div>} modal>

      <span> Modal content </span>
    </Popup>
  );

  export default ExcluirModal;