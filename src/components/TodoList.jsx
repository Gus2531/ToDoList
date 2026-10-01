import TodoItem from "./TodoItem";

function TodoList({
    tarefas,
    excluirTarefa,
    concluirTarefa
}) {
    return (
        <div className="todo-list">
            {tarefas.map((tarefa) => (
                <TodoItem
                    key={tarefa.id}
                    tarefa={tarefa}
                    excluirTarefa={excluirTarefa}
                    concluirTarefa={concluirTarefa}
                />
            ))}
        </div>
    );
}

export default TodoList;