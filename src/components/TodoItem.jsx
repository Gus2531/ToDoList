function TodoItem({
    tarefa,
    excluirTarefa,
    concluirTarefa
}) {
    return (
        <div className="todo-item">
            <div>
                <input
                    type="checkbox"
                    checked={tarefa.concluida}
                    onChange={() => concluirTarefa(tarefa.id)}
                />

                <span className={tarefa.concluida ? "concluida" : ""}>
                    {tarefa.texto}
                </span>
            </div>

            <button onClick={() => excluirTarefa(tarefa.id)}>
                Excluir
            </button>
        </div>
    );
}

export default TodoItem;