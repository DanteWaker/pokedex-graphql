import { useState } from 'react';

import { useGetPokemonsQuery } from './middleware/graphql/generated';

function App() {
  const { data } = useGetPokemonsQuery({
    variables: { limit: 2, offset: 1 },
  });

  console.log(data);

  return (
    <div className="App">
      <h1>Testando</h1>
    </div>
  );
}

export default App;
