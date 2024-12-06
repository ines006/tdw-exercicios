import TodoForm from './components2/TodoForm2';
import TodoListFilter from './components2/TodoListFilter2';
import React, { useState, useEffect, createContext } from 'react';
import styled from 'styled-components';

export const TodosContext = createContext(); // Cria Contexto 

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  width: 400px;
  max-width: 90%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TaskList = styled.div`
  margin-top: 20px;
`;

const TaskLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const TaskCheckbox = styled.input`
  margin-right: 10px;
`;

const TaskText = styled.span`
  flex: 1;
`;

const TaskButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:first-child {
    margin-left: auto;
  }
`;

const EditInput = styled.input`
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 10px;
`;

function App2() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks2');
    return savedTasks ? JSON.parse(savedTasks) : []; 
  });

  const [selectedTasks, setSelectedTasks] = useState(() => {
    const savedSelectedTasks = localStorage.getItem('selectedTasks2');
    return savedSelectedTasks ? JSON.parse(savedSelectedTasks) : [];
  });

  const [filtroAtual, setFiltroAtual] = useState(() => {
    return localStorage.getItem('filtroAtual2') || 'all';
  });

  const [editTask, setEditTask] = useState({});
  const [novoValor, setNovoValor] = useState("");
  const [tarefasExibidas, setTarefasExibidas] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks2', JSON.stringify(tasks));
    localStorage.setItem('selectedTasks2', JSON.stringify(selectedTasks));
    localStorage.setItem('filtroAtual2', filtroAtual);
  }, [tasks, selectedTasks, filtroAtual]);

  const setdados = (dadosFilho) => { 
    setTasks([...tasks, dadosFilho]);  
  };

  const setfiltro = (selectedFilter) => {
    setFiltroAtual(selectedFilter);
  };

  useEffect(() => {
    if (filtroAtual === 'all') {
      setTarefasExibidas(tasks);
    } else if (filtroAtual === 'active') {
      setTarefasExibidas(tasks.filter((_, index) => !selectedTasks.includes(index)));
    } else if (filtroAtual === 'completed') {
      setTarefasExibidas(tasks.filter((_, index) => selectedTasks.includes(index)));
    }
  }, [tasks, selectedTasks, filtroAtual]);

  const handleCheckboxChange = (event, index) => {
    if (event.target.checked) {
      setSelectedTasks(prev => [...prev, index]);
    } else {
      setSelectedTasks(prev => prev.filter(taskIndex => taskIndex !== index));
    }
  };

  const handleEdit = (index) => {
    setEditTask(prevEditTask => ({
      ...prevEditTask,
      [index]: !prevEditTask[index]
    }));
  };

  const editItem = (index, newValue) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newValue;
    setTasks(updatedTasks);
    setEditTask(prev => ({ ...prev, [index]: false }));
  };

  const deleteItem = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setSelectedTasks(selectedTasks.filter(taskIndex => taskIndex !== index));
  };

  return (
    <TodosContext.Provider value={tasks.length}>
      <AppContainer>
        <ContentWrapper>
          <TodoForm setdados={setdados} />
          <TodoListFilter setfiltro={setfiltro} filtroAtual={filtroAtual} />
          <TaskList>
            {tarefasExibidas.map((item, index) => (
              <TaskLabel key={index}>
                {editTask[index] ? (
                  <>
                    <EditInput
                      defaultValue={item}
                      onChange={(e) => setNovoValor(e.target.value)} 
                    />
                    <TaskButton onClick={() => handleEdit(index)}>Cancel</TaskButton>
                    <TaskButton onClick={() => editItem(index, novoValor)}>Save</TaskButton>
                  </>
                ) : (
                  <>
                    <TaskCheckbox 
                      type="checkbox"
                      checked={selectedTasks.includes(index)}
                      onChange={(event) => handleCheckboxChange(event, index)}
                    />
                    <TaskText>{item}</TaskText>
                    <TaskButton onClick={() => handleEdit(index)}>Edit</TaskButton>
                    <TaskButton onClick={() => deleteItem(index)}>Delete</TaskButton>
                  </>
                )}
              </TaskLabel>
            ))}
          </TaskList>
        </ContentWrapper>
      </AppContainer>
    </TodosContext.Provider>
  );
}

export default App2;
