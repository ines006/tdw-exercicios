import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  flex: 1;
  margin: 0 5px;
  background: ${(props) => (props.active ? "#007bff" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#007bff")};
  border: 2px solid #007bff;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;



function TodoListFilter2({ setfiltro, filtroAtual }) {

  TodoListFilter2.propTypes = {
    setfiltro: PropTypes.func.isRequired, 
    filtroAtual: PropTypes.string.isRequired      
  };

  return (
    <FilterContainer>  
      <Button $primary
        onClick={() => setfiltro("all")} 
        style={{ fontWeight: filtroAtual === "all" ? 'bold' : 'normal' }}
      >All</Button>  

      <Button
        onClick={() => setfiltro("active")} 
        style={{ fontWeight: filtroAtual === "active" ? 'bold' : 'normal' }}
      >Active</Button>

      <Button
        onClick={() => setfiltro("completed")} 
        style={{ fontWeight: filtroAtual === "completed" ? 'bold' : 'normal' }}
      >Completed</Button>
    </FilterContainer>
  );
}

export default TodoListFilter2;
