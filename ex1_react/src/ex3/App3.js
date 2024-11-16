
import React, {useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import store from '../store';  
import { deposito, levantamento } from '../store';  // Importa as actions

function App3() {

const [valor, setValor] = useState(0);

  const saldo  = useSelector((state) => state.balance);

  const dispatch = useDispatch();

  const handleValue = (event) => {
    setValor(Number(event.target.value))
  }

  const handleLevantamento = () => {
    if (valor > 0) dispatch(levantamento(valor));
    setValor(0);
  };
  
  const handleDeposito = () => {
    if (valor > 0) dispatch(deposito(valor));
    setValor(0);
  };
  

  return (
    <div>
      <h1>Máquina Multibanco</h1>
      <h3>Saldo Atual: {saldo}</h3>

      <input
        type='number'
        value={valor}
        onChange={handleValue}
      ></input>
      <button onClick={handleLevantamento}>Levantar</button>
      <button onClick={handleDeposito}>Depositar</button>


    </div>
  );
}

export default App3;
