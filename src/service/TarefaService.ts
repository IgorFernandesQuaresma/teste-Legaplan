
import Tarefa from '../models/Tarefa'; 

class TarefaService {
    private static STORAGE_KEY = 'tarefas';

    // Método para obter todas as tarefas do localStorage
    public static getTarefas(): Tarefa[] {
        const tarefasJson = localStorage.getItem(this.STORAGE_KEY);
        return tarefasJson ? JSON.parse(tarefasJson) : [];
    }

    // Método para salvar todas as tarefas no localStorage
    public static saveTarefas(tarefas: Tarefa[]): void {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tarefas));
    }

    // Método para adicionar uma nova tarefa
    public static addTarefa(novaTarefa: Tarefa): void {
        const tarefas = this.getTarefas();
        tarefas.push(novaTarefa);
        this.saveTarefas(tarefas);
    }

    // Método para deletar uma tarefa pelo índice
    public static deleteTarefa(index: number): void {
        const tarefas = this.getTarefas();
        if (index >= 0 && index < tarefas.length) {
            tarefas.splice(index, 1); // Remove a tarefa do array
            this.saveTarefas(tarefas); // Salva o array atualizado no localStorage
        }
    }

    // Método para criar uma nova tarefa, apenas para simulação
    public static createTarefa(tarefa: string): Tarefa {
        return { tarefa };
    }
}

export default TarefaService;
