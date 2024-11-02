import React from 'react';

function TodoListFilter({ setfiltro, filtroAtual }) {
  return (
    <div>  
      <button
        onClick={() => setfiltro("all")} 
        style={{ fontWeight: filtroAtual === "all" ? 'bold' : 'normal' }}
      >All</button>  

      <button
        onClick={() => setfiltro("active")} 
        style={{ fontWeight: filtroAtual === "active" ? 'bold' : 'normal' }}
      >Active</button>

      <button
        onClick={() => setfiltro("completed")} 
        style={{ fontWeight: filtroAtual === "completed" ? 'bold' : 'normal' }}
      >Completed</button>
    </div>
  );
}

export default TodoListFilter;
