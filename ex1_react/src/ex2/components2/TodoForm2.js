import React, { useState, useContext } from 'react';
import { TodosContext } from '../App2'; 
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: calc(100% - 80px);
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


function TodoForm2(props) {

    const [input, setInput] = useState(''); 
    const todos = useContext(TodosContext);

    return (
      <FormContainer>
        <p>What needs to be done?</p>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)} //atualiza o valor do input
        />        
        <AddButton 
        onClick={() => {
            props.setdados(input); // adiciona uma nova tarefa com o  valor do input
            setInput(''); //limpa o input depois de adicionar a tarefa
        }}        
        >
            Add
        </AddButton>

        <p>ToDo's: {todos}</p>
      </FormContainer>
    );
  }

  export default TodoForm2;
