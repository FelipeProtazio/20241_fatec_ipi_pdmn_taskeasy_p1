import React, { useState } from 'react';
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';

function App() {
  const [lembretes, setLembretes] = useState([
    'Preparar aula de programação',
    'Fazer feira',
    'Preparar marmita'
  ]); 

  function adicionarLembrete(lembrete) {
    setLembretes([...lembretes, lembrete]);
  };

  return (
    <div className='container border rounded mt-2'>
      <LembreteLista lista={lembretes} />
      <LembreteEntrada adicionarLembrete={adicionarLembrete} />
    </div>
  );
}

export default App;