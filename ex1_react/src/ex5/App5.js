import React, { useState } from 'react';
import { useFetchCatsQuery } from '../store';

function App5() {
  const [page, setPage] = useState(1);

  const { data: cats, error, isLoading } = useFetchCatsQuery({ limit: 4, page, order: 'asc' });

  return (
    <div>
      <h2>CAT API 2</h2>
      {isLoading && <p>A Carregar...</p>}
      {error && <p>Erro: {error.message}</p>}
      {cats && (
        <div>
          {cats.map((cat) => (
            <img key={cat.id} src={cat.url} alt="Cat" width="200" />
          ))}
        </div>
      )}
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
        Página Anterior
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Próxima Página</button>
    </div>
  );
}

export default App5;
