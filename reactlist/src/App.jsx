import "./App.css";
import editIcon from "./assets/Vector (1).svg";
import trashIcon from "./assets/Vector.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // Lista de tarefas
  const [taskList, setTaskList] =useState([]);

  // Valor do input
  const [taskValue, setTaskValue] = useState("");

  // Controle da edição
  const [editMode, setEditMode] = useState(false);
  const [idToEdit, setIdToEdit] = useState(0);

  // ==========================
  // GET
  // ==========================
  const getTask = async () => {
    try {
      const response = await axios.get("http://localhost:3000/taskpoint");
      setTaskList(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  // ==========================
  // POST
  // ==========================
  const createTask = async (e) => {
    e.preventDefault();

    if (taskValue.trim() === "") {
      alert("Digite uma tarefa.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/taskpoint", {
        descricao: taskValue,
      });

      alert("Tarefa cadastrada!");

      setTaskValue("");
      getTask();
    } catch (error) {
      console.error("Erro ao cadastrar tarefa:", error);
    }
  };

  // ==========================
  // Carrega dados para edição
  // ==========================
  const putTask = (task) => {
    setTaskValue(task.descricao);
    setEditMode(true);
    setIdToEdit(task.id);
  };

  // ==========================
  // PUT
  // ==========================
  const confirmPutTask = async (e) => {
    e.preventDefault();

    if (taskValue.trim() === "") {
      alert("Digite uma tarefa.");
      return;
    }

    try {
      await axios.put(
        `http://localhost:3000/taskpoint/${idToEdit}`,
        {
          descricao: taskValue,
        }
      );

      alert("Tarefa atualizada!");

      setTaskValue("");
      setEditMode(false);
      setIdToEdit(0);

      getTask();
    } catch (error) {
      console.error("Erro ao editar tarefa:", error);
    }
  };

  // ==========================
  // DELETE
  // ==========================
  const deleteTask = async (task) => {
    const apagar = window.confirm(
      `Deseja excluir a tarefa "${task.descricao}"?`
    );

    if (!apagar) return;

    try {
      await axios.delete(
        `http://localhost:3000/taskpoint/${task.id}`
      );

      alert("Tarefa excluída!");

      getTask();
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <header className="header-section">
        <h1 className="header-section_title">
          React List
        </h1>
      </header>

      <main className="body-section">
        <form
          className="cad-task"
          onSubmit={editMode ? confirmPutTask : createTask}
        >
          <input
            type="text"
            className="cad-task_entry"
            placeholder="Adicione uma tarefa"
            value={taskValue}
            onChange={(e) =>
              setTaskValue(e.target.value)
            }
          />

          <button className="cad-task_btn-confirm">
            {editMode
              ? "Salvar Alterações"
              : "Adicionar"}
          </button>

          {editMode && (
            <button
              type="button"
              className="cad-task_btn-confirm"
              onClick={() => {
                setEditMode(false);
                setIdToEdit(0);
                setTaskValue("");
              }}
            >
              Cancelar
            </button>
          )}
        </form>

        <section className="cardlist">
          {taskList.map((task) => (
            <article
              className="cardtask"
              key={task.id}
            >
              <p className="cardtask_task-text">
                {task.descricao}
              </p>

              <div className="cardtask_icon-box">
                <div
                  className="cardlist_icon"
                  onClick={() => putTask(task)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={editIcon}
                    alt="Editar"
                  />
                </div>

                <div
                  className="cardlist_icon"
                  onClick={() => deleteTask(task)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={trashIcon}
                    alt="Excluir"
                  />
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer-list">
        <p className="footer-list_right-text">
          2026 React List - Todos os
          direitos reservados
        </p>
      </footer>
    </>
  );
}

export default App;