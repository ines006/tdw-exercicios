import TodoForm from './components/TodoForm';
import TodoListFilter from './components/TodoListFilter';
import React, { useState, useEffect } from 'react';

function App() {
  
  // Var de estado que guarda as tarefas adicionadas -> inicializa com o conteúdo guardado em local storage ou vazio
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : []; 
  });
  
  // Var de estado que guarda as tarefas selecionadas -> inicializa com o conteúdo guardado em local storage ou vazio
  const [selectedTasks, setSelectedTasks] = useState(() => {
    const savedSelectedTasks = localStorage.getItem('selectedTasks');
    return savedSelectedTasks ? JSON.parse(savedSelectedTasks) : [];
  });
  
  // Var de estado que guarda o filtro atual -> inicializa com o conteúdo guardado em local storage ou por defeito 'all'
  const [filtroAtual, setFiltroAtual] = useState(() => {
    return localStorage.getItem('filtroAtual') || 'all';
  });

  const [editTask, setEditTask] = useState({}); // Estado para guardar as tarefas que estão em modo de edição
  const [novoValor, setNovoValor] = useState(""); // Estado que guarda o novo valor dado a uma tarefa
  const [tarefasExibidas, setTarefasExibidas] = useState([]); // var de estado que guarda as tarefas filtradas

  // Atualiza `localStorage` sempre que `tasks`, `selectedTasks` ou `filtroAtual` mudam
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('selectedTasks', JSON.stringify(selectedTasks));
    localStorage.setItem('filtroAtual', filtroAtual);
  }, [tasks, selectedTasks, filtroAtual]);

  //função de callback - tarefas adicionadas
  const setdados = (dadosFilho) => { 
    setTasks([...tasks, dadosFilho]);  
  };

  // Callback para definir o filtro
  const setfiltro = (selectedFilter) => {
    setFiltroAtual(selectedFilter);
  };

  // Função para atualizar `tarefasExibidas` quando `tasks`, `selectedTasks`, ou `filtroAtual` mudarem
  useEffect(() => {
    if (filtroAtual === 'all') {
      setTarefasExibidas(tasks);
    } else if (filtroAtual === 'active') {
      setTarefasExibidas(tasks.filter((_, index) => !selectedTasks.includes(index)));
    } else if (filtroAtual === 'completed') {
      setTarefasExibidas(tasks.filter((_, index) => selectedTasks.includes(index)));
    }
  }, [tasks, selectedTasks, filtroAtual]);

  // Função que define a seleção das tarefas, sem permitir duplicados
  const handleCheckboxChange = (event, index) => {
    const checkedTaskIndex = index; // Usa o índice para identificar a tarefa unicamente

    if (event.target.checked) {
      // Adiciona a tarefa a `selectedTasks` apenas se ainda não estiver presente
      if (!selectedTasks.includes(checkedTaskIndex)) {
        setSelectedTasks([...selectedTasks, checkedTaskIndex]);
      }
    } else {
      // Remove a tarefa desmarcada de `selectedTasks`
      setSelectedTasks(selectedTasks.filter(taskIndex => taskIndex !== checkedTaskIndex));
    }
  };

  //função que define a visibilidade da componente de edição
  const handleEdit = (index) => {
    setEditTask(prevEditTask => ({
      ...prevEditTask,
      [index]: !prevEditTask[index] // Alterna o modo de edição da tarefa específica
    }));
  };

  //função para editar
  const editItem = (index, newValue) => {
    const updatedTasks = [...tasks]; // cópia do array das tarefas p/ efetuar mudanças

    updatedTasks[index] = newValue; // Atualiza a tarefa no índice desejado

    setTasks(updatedTasks); // se salvar as mudanças -> atualizar o array tasks com o update tasks
    setEditTask(prev => ({ ...prev, [index]: false })); // Desativa o modo de edição para essa tarefa
  };

  //função para eliminar
  const deleteItem = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // elimina tarefa no array das tarefas
    setSelectedTasks(selectedTasks.filter(taskIndex => taskIndex !== index)); // elimina tarefa no array das tarefas concluídas
  };

  console.log("array tarefas:", tasks);
  console.log("array tarefas concluídas:", selectedTasks);
  console.log("visibilidade da edição", editTask);
  console.log("novo valor", novoValor);

  return (
    <div className="App">
      <TodoForm setdados={setdados} />

      <p></p> {/* adicionar espaço entre checkboxes */}

      <TodoListFilter setfiltro={setfiltro} filtroAtual={filtroAtual} />

      {tarefasExibidas.map((item, index) => (
        <>
          <p></p> {/* adicionar espaço entre checkboxes */}
          <label key={index}>
            {editTask[index] ? (
              <>
                <input
                  defaultValue={item}
                  onChange={(e) => setNovoValor(e.target.value)} 
                />
                <button onClick={() => handleEdit(index)}>cancel</button>
                <button onClick={() => editItem(index, novoValor)}>save</button>
              </>
            ) : (
              <>
                <input 
                  type="checkbox"
                  checked={selectedTasks.includes(index)}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
                {item}
                <button onClick={() => handleEdit(index)}>edit</button>
                <button onClick={() => deleteItem(index)}>delete</button>
              </>
            )}
          </label>
        </>
      ))}
    </div>
  );
}

export default App;
