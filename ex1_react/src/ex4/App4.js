import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCats } from '../store';

function App4() {
  // const dispatch = useDispatch();
  // const { cats, status, error } = useSelector((state) => state.cats);

  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   dispatch(fetchCats({ limit: 4, page, order: 'asc' }));
  // }, [dispatch, page]);

  return (
    <div>
      <h2>CAT API</h2>
      {/* {status === 'loading' && <p>A Carregar...</p>}
      {status === 'failed' && <p>Erro: {error}</p>}
      {status === 'succeeded' && (
        <div>
          {cats.map((cat) => (
            <img key={cat.id} src={cat.url} alt="Cat" width="200" />
          ))}
        </div>
      )}
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
        Página Anterior
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Próxima Página</button> */}
    </div>
  );
}

export default App4;
