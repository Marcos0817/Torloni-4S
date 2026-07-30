//imports
import './App.css'
import editIcon from './assets/Vector (1).svg'
import trashIcon from './assets/Vector.svg'
import { useState } from 'react'

function App() {
 // states e variáveis

 //------ ATIVIDADE ------
  // State com 4 tarefas
 //criar um state chamado
 //tasklist como iniciando com um array de
 //objetos [{ xpto: abc, iii: uuu}]
 //já preenchido com 4 tarefas
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      descrição: "Revisar HTML Semântico",
    },
    {
      id: 2,
      descrição: "Revisar ReactJS",
    },
    {
      id: 3,
      descrição: "Revisar ReactJS",
    },
    {
      id: 4,
      descrição: "Estudar React Native",
    },
  ]);

 //em seguida fazer um map e gerar os cards
 //com todas as tarefas
 //funções e effects

  return (
  <>
  <header className='header-section'>
 <h1 className='header-section_title'>React List</h1>
 </header>
 <main className='body-section'>
  <form className='cad-task'>
   <input 
   type="text" 
   className='cad-task_entry' 
   placeholder="Adicione uma tarefa" 
   />
   <button className='cad-task_btn-confirm'>Adicionar</button>
  </form>

<section className='cardlist'>
    {
      taskList.map(task => {
        return (
          <article className='cardtask'>
  <p className='cardtask_task-text'>{task.descrição}</p>

  <div className="cardtask_icon-box">
    <div className="cardlist_icon">
      <img src={editIcon} alt="Editar"/>
    </div>
    
    <div className="cardlist_icon">
      <img src={trashIcon} alt="Excluir"/>
    </div>
  </div>

 </article>

        )
      })
    }

 </section>
 </main>

 <footer className='footer-list'>
 <p className='footer-section_right-text'>2026 React List - Todos os direitos reservados</p>
</footer>
 </>

  )
}

export default App
