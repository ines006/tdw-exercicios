import React, { useState } from 'react';

function TodoForm2(props) {

    const [input, setInput] = useState(''); 

    return (
      <div>
        <p>What needs to be done? 2</p>
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
      </div>
    );
  }

  export default TodoForm2;
