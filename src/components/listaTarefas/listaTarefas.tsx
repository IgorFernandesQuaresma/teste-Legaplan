import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/listaTarefas/listaTarefas.module.scss';
import trash from '../../../public/assets/trash.png'
import Tarefa from '../../models/Tarefa';


export default function ListaTarefas() {

    const [modal, setModal] = useState(false);
    const [modalExcluir, setModalExcluir] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [indiceTarefaParaExcluir, setIndiceTarefaParaExcluir] = useState<number | null>(null);


    const gerarId = () => {
        return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    };

    const novaTarefa: Tarefa = {
        id: gerarId(),
        tarefa: titulo, 
        completed: false 
    };


    const abrirModal = () => {
        setModal(true);
    };

        const fecharModal = () => {
        setModal(false);
    };

    const abrirModalExcluir = (index: number) => {
        console.log('Abrindo modal para excluir tarefa de índice:', index);
        setIndiceTarefaParaExcluir(index); 
        setModalExcluir(true); 
    };

    const fecharModalExcluir = () => {
        setIndiceTarefaParaExcluir(null); 
        setModalExcluir(false); 
    };

    useEffect(() => {
        const storedTarefas = localStorage.getItem('tarefas');
        const tarefasSalvas: Tarefa[] = storedTarefas ? JSON.parse(storedTarefas) : [];
        setTarefas(tarefasSalvas);
    }, []);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(e.target.value);
    };

    const handleAddTarefa = () => {
        if (titulo.trim()) {
            const updatedTarefas = [...tarefas, novaTarefa];
            setTarefas(updatedTarefas);
            localStorage.setItem('tarefas', JSON.stringify(updatedTarefas));
            setTitulo('');
            fecharModal(); 
            console.log('tarefa adicionada');
        }
    };

    const handleDeleteTarefa = () => {
        if (indiceTarefaParaExcluir !== null) {
            const tarefasAtualizadas = [...tarefas];
            tarefasAtualizadas.splice(indiceTarefaParaExcluir, 1); 
    
            setTarefas(tarefasAtualizadas); 
            localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas)); 
    
            setIndiceTarefaParaExcluir(null); 
            setModalExcluir(false); 
            console.log('Tarefa deletada');
        }
    };


    const handleToggleCompleted = (id: string) => {
        const tarefasAtualizadas = tarefas.map(tarefa => {
            if (tarefa.id === id) {
                return { ...tarefa, completed: !tarefa.completed }; 
            }
            return tarefa; 
        });
    
        setTarefas(tarefasAtualizadas);
        localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
        const tarefaMovida = tarefasAtualizadas.find(t => t.id === id);
        console.log(`Tarefa ${id} movida para ${tarefaMovida?.completed ? 'tarefas realizadas' : 'tarefas pendentes'}`);
    };

    return (

        <section className={styles.listaTarefas_container}>
        <div className={styles.listaTarefas}>

            <h2 className={styles.listaTarefas_titulo}>Suas tarefas hoje</h2>
                <ul>
                {tarefas
                    .filter((tarefa) => !tarefa.completed) 
                    .map((tarefa, index) => (
                    <li key={index} className={styles.tarefaItem}>
                        <div className={styles.tarefaItem_bloco}>
                            <input type="checkbox" id={`tarefa-${tarefa.id}`} 
                            className={styles.checkbox}
                            checked={tarefa.completed}
                            onChange={() => handleToggleCompleted(tarefa.id)}
                            
                            />
                            <p className={styles.tarefaDescricao}>{tarefa.tarefa}</p>
                        </div>
                        <Image
                            src={trash}
                            alt="Logo"
                            className={styles.icone}
                            onClick={() => abrirModalExcluir(index)}
                        />
                    </li>
                ))}
                </ul>

            <h2 className={styles.listaTarefas_titulo}>Tarefas realizadas</h2>
                <ul className={styles.tarefasRealizadas}>
                {tarefas
                    .filter((tarefa) => tarefa.completed) 
                    .map((tarefa, index) => (
            <li key={index} className={styles.tarefaItem}>
                <div className={styles.tarefaItem_bloco}>
                    <input
                        type="checkbox"
                        id={`tarefa-${tarefa.id}-realizada`} 
                        className={styles.checkbox}
                        checked={tarefa.completed} 
                        onChange={() => handleToggleCompleted(tarefa.id)}
                    />
                    <p className={styles.tarefaDescricao_realizada}>{tarefa.tarefa}</p>
                </div>
                <Image
                    src={trash}
                    alt="Excluir"
                    className={styles.icone}
                    onClick={() => abrirModalExcluir(index)} 
                />
            </li>
        ))}

                </ul>
    </div>

    <button className={styles.btn} onClick={abrirModal}> Adicionar nova tarefa </button>

                {/* Modal add tarefas */}

            <div className={modal ? styles.addTarefa_container : styles.modalFechado}>
                <h1 className={styles.addTarefa_title}>Nova Tarefa</h1>
                    <div className={styles.addTarefa_inputCampo}>
                            <p className={styles.addTarefa_subtitulo}>Titulo</p>
                            <input className={styles.addTarefa_input}
                        type="text"
                        placeholder="Digite"
                        value={titulo}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.actionButtons_container}>
                    <button className={styles.actionButtons_cancelar} onClick={fecharModal}>Cancelar</button>
                    <button className={styles.actionButtons_adicionar} onClick={handleAddTarefa}>Adicionar</button>
                </div>
        </div>


        {/* Modal excluir tarefas */}

        <div className={modalExcluir ? styles.excluirTarefa_container : styles.modalFechado}>
                <h1 className={styles.excluirTarefa_title}>Exclir Tarefa</h1>
                    <div className={styles.excluirTarefa_inputCampo}>
                            <h2 className={styles.excluirTarefa_subtitulo}>Tem certeza que você deseja deletar essa tarefa?</h2>
                    </div>

                    <div className={styles.excluirActionButtons_container}>
                    <button className={styles.excluirActionButtons_cancelar} onClick={fecharModalExcluir}>Cancelar</button>
                    <button className={styles.excluirActionButtons_deletar} onClick={handleDeleteTarefa}>Deletar</button>
                </div>
        </div>

    </section>
    );
}