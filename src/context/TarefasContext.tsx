'use client'
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import TarefaService from '../service/TarefaService'; 
import Tarefa from '../models/Tarefa';


interface TarefaContextType {
    tarefas: Tarefa[];
    addTarefa: (novaTarefa: Tarefa) => void;
    deleteTarefa: (index: number) => void;
}


const TarefaContext = createContext<TarefaContextType | undefined>(undefined);


const TarefaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  // Carrega as tarefas do localStorage ao montar o componente
  useEffect(() => {
    const tarefasIniciais = TarefaService.getTarefas();
    setTarefas(tarefasIniciais);
  }, []);

  // Adiciona uma nova tarefa
  const addTarefa = (novaTarefa: Tarefa) => {
    const novasTarefas = [...tarefas, novaTarefa];
    setTarefas(novasTarefas);
    TarefaService.addTarefa(novaTarefa);
  };

  // Remove uma tarefa por índice
  const deleteTarefa = (index: number) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
    TarefaService.deleteTarefa(index);
  };

  // Prover o contexto com as tarefas e funções para os filhos
  return (
    <TarefaContext.Provider value={{ tarefas, addTarefa, deleteTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de tarefas
const useTarefas = () => {
   const context = useContext(TarefaContext);
 if (context === undefined) {
    throw new Error('useTarefas não esta acessivel');
 }
return context;
};

// Exporta o provedor e o hook para uso nos componentes
export { TarefaProvider, useTarefas };
