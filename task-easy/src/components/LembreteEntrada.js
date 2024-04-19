import React, { useState } from 'react';

function LembreteEntrada({ adicionarLembrete }) {
  const [entrada, setEntrada] = useState('');

  return (
    <div className='container'>
      <div className='row'>
        <input 
          className='form-control text-center mt-2'
          value={entrada} 
          onChange={(event) => setEntrada(event.target.value)} 
          type="text" 
          placeholder='Digite seu lembrete' 
        />
      </div>
      <div className='row'>
        <button 
          className='btn btn-outline-primary w-100 mt-2'
          onClick={() => adicionarLembrete(entrada)}
        >
          Enviar lembrete
        </button>
      </div>
    </div>
  );
}

export default LembreteEntrada;