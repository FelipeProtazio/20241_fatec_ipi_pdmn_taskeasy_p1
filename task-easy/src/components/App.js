
import React, { useState } from 'react';
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';

function App() {
  const [lembretes, setLembretes] = useState([]);

  function adicionarLembrete(lembrete) {
    const temValor = lembrete.trim() !== '';
    
    if (temValor) {
      // Faz o spread em lembretes para manter todos os lembretes, adicionando o novo lembrete ao final
      setLembretes([...lembretes, lembrete]);
    }
  };

  return (
    <div className='container border rounded mt-2'>
      <LembreteLista lista={lembretes} />
      <LembreteEntrada adicionarLembrete={adicionarLembrete} />
    </div>
  );
}

export default App;