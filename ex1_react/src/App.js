import './App.css';
import './components/TodoForm'
import TodoForm from './components/TodoForm';
import React, { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks]= useState([]); // var de estado que guarda as tarefas adicionadas
  const [selectedTasks, setSelectedTasks] = useState([]); // var de estado que guarda as tarefas concluídas

  //função de callback - tarefas adicionadas
  const setdados = (dadosFilho) => { 
    setTasks([...tasks, dadosFilho]);  
  }

  //função que define a seleção das tarefas
  const handleCheckboxChange = (event) => {

  const checkedTask = event.target.value;

  if(event.target.checked){
   setSelectedTasks([...selectedTasks, checkedTask])
  }else{
   setSelectedTasks(selectedTasks.filter(id=>id !== checkedTask)) //
  }
  }

  console.log("array tarefas:", tasks);
  console.log("array tarefas concluídas:", selectedTasks);


  return (
    <div className="App">
      <TodoForm setdados={setdados} />

      {tasks.map(item => (
          <label key={item.id}>
            <input type='checkbox' 
            value={item}
            checked={selectedTasks.includes(item)}
            onChange={(event) => { handleCheckboxChange(event) }}
            />
            {item}
          </label>
        ))}

    </div>
  );
}

export default App;
