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
                        <input type="checkbox" id="tarefa3" className={styles.checkbox} checked/>
                        <p className={styles.tarefaDescricao_realizada}>Levar o lixo para fora</p>
                    </div>
                    <Image src={trash} alt="Logo" className={styles.icone}  />
                    </li>
                </ul>
    </div>

    <button className={styles.btn}> Adicionar nova tarefa </button>

                {/* Modal add tarefas */}

            <div className={styles.addTarefa_container}>
                <h1 className={styles.addTarefa_title}>Nova Tarefa</h1>
                    <div className={styles.addTarefa_inputCampo}>
                            <p className={styles.addTarefa_subtitulo}>Titulo</p>
                            <input className={styles.addTarefa_input}
                        type="text"
                        placeholder="Digite"
                        />
                    </div>

                    <div className={styles.actionButtons_container}>
                    <button className={styles.actionButtons_cancelar}>Cancelar</button>
                    <button className={styles.actionButtons_adicionar}>Adicionar</button>
                </div>
        </div>


        {/* Modal excluir tarefas */}

        <div className={styles.excluirTarefa_container}>
                <h1 className={styles.excluirTarefa_title}>Exclir Tarefa</h1>
                    <div className={styles.excluirTarefa_inputCampo}>
                            <h2 className={styles.excluirTarefa_subtitulo}>Tem certeza que você deseja deletar essa tarefa?</h2>
                    </div>

                    <div className={styles.excluirActionButtons_container}>
                    <button className={styles.excluirActionButtons_cancelar}>Cancelar</button>
                    <button className={styles.excluirActionButtons_deletar}>Deletar</button>
                </div>
        </div>

    </section>
    );
}