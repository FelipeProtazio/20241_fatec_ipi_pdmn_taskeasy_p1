import React, { useState } from 'react';
import LembreteEntrada from './LembreteEntrada';

function App() {
  const [lembretes, setLembretes] = useState([]); 

  function adicionarLembrete(lembrete) {
    // Faz o spread em lembretes para manter todos os lembretes, adicionando o novo lembrete ao final
    this.setLembretes([...lembretes, lembrete]);
  };

  return (
    <div className='container border rounded mt-2'>
      <LembreteEntrada adicionarLembrete={adicionarLembrete} />
    </div>
  );
}

export default App;