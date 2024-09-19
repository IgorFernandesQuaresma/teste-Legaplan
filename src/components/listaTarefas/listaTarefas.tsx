import Image from 'next/image';
import React from 'react';
import styles from '../../styles/listaTarefas/listaTarefas.module.scss';
import trash from '../../../public/assets/trash.png'











export default function ListaTarefas() {
    return (

        <section className={styles.listaTarefas_container}>
        <div className={styles.listaTarefas}>

            <h2 className={styles.listaTarefas_titulo}>Suas tarefas hoje</h2>
                <ul>
                    <li className={styles.tarefaItem}>
                        <div className={styles.tarefaItem_bloco}>
                        <input type="checkbox" id="tarefa1" className={styles.checkbox} />
                        <p className={styles.tarefaDescricao}>Lavar as mãos</p>
                        </div>
                        <Image src={trash} alt="Logo" className={styles.icone}  />
                    </li>

                    <li className={styles.tarefaItem}>
                        <div className={styles.tarefaItem_bloco}>
                        <input type="checkbox" id="tarefa1" className={styles.checkbox} />
                        <p className={styles.tarefaDescricao}>Fazer um bolo</p>
                        </div>
                        <Image src={trash} alt="Logo" className={styles.icone}  />
                    </li>

                    <li className={styles.tarefaItem}>
                        <div className={styles.tarefaItem_bloco}>
                        <input type="checkbox" id="tarefa1" className={styles.checkbox} />
                        <p className={styles.tarefaDescricao}>Lavar a louça</p>
                        </div>
                        <Image src={trash} alt="Logo" className={styles.icone}  />
                    </li>


                </ul>

            <h2 className={styles.listaTarefas_titulo}>Tarefas realizadas</h2>
                <ul className={styles.tarefasRealizadas}>
                    <li className={styles.tarefaItem}>
                    <div className={styles.tarefaItem_bloco}>
                        <input type="checkbox" id="tarefa3" className={styles.checkbox} checked />
                        <p className={styles.tarefaDescricao_realizada}>Levar o lixo para fora</p>
                    </div>
                        <Image src={trash} alt="Logo" className={styles.icone}  />
                    </li>
                </ul>
    </div>
                <button className={styles.btn}>Adicionar Tarefa</button>   
    </section>
    );
}