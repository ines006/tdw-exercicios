import React from 'react';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';

function TodoListFilter2({ setfiltro, filtroAtual }) {

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props =>
      props.$primary &&
      css`
        background: #BF4F74;
        color: white;
      `};
  `;

  TodoListFilter2.propTypes = {
    setfiltro: PropTypes.func.isRequired, 
    filtroAtual: PropTypes.string.isRequired      
  };

  return (
    <div>  
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
    </div>
  );
}

export default TodoListFilter2;
