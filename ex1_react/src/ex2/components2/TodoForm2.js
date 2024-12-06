import React, { useState, useContext } from 'react';
import { TodosContext } from '../App2'; 


function TodoForm2(props) {

    const [input, setInput] = useState(''); 
    const todos = useContext(TodosContext);

    return (
      <div>
        <p>What needs to be done?</p>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)} //atualiza o valor do input
        />        
        <button 
        onClick={() => {
            props.setdados(input); // adiciona uma nova tarefa com o  valor do input
            setInput(''); //limpa o input depois de adicionar a tarefa
        }}        
        >
            Add
        </button>

        <p>ToDo's: {todos}</p>
      </div>
    );
  }

  export default TodoForm2;
