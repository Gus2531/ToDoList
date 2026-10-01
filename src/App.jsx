import { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [tarefas, setTarefas] = useState([]);

    function adicionarTarefa(texto) {
        const novaTarefa = {
            id: Date.now(),
            texto: texto,
            concluida: false
        };

        setTarefas([...tarefas, novaTarefa]);
    }

    function excluirTarefa(id) {
        setTarefas(
            tarefas.filter((tarefa) => tarefa.id !== id)
        );
    }

    function concluirTarefa(id) {
        setTarefas(
            tarefas.map((tarefa) => {
                if (tarefa.id === id) {
                    return {
                        ...tarefa,
                        concluida: !tarefa.concluida
                    };
                }

                return tarefa;
            })
        );
    }

    return (
        <div className="app">
            <h1>Minha To-Do List</h1>

            <TodoForm adicionarTarefa={adicionarTarefa} />

            <TodoList
                tarefas={tarefas}
                excluirTarefa={excluirTarefa}
                concluirTarefa={concluirTarefa}
            />
        </div>
    );
}

export default App;