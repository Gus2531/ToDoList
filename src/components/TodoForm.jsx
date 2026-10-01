import { useState } from "react";

function TodoForm({ adicionarTarefa }) {
    const [texto, setTexto] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (texto.trim() === "") {
            return;
        }

        adicionarTarefa(texto);

        setTexto("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite uma tarefa..."
                value={texto}
                onChange={(event) => setTexto(event.target.value)}
            />

            <button type="submit">
                Adicionar
            </button>
        </form>
    );
}

export default TodoForm;