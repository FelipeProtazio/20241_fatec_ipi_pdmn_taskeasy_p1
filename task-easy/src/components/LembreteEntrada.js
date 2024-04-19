import React from 'react';

function LembreteEntrada() {
  return (
    <div className='container'>
      <div className='row'>
        <input type="text" placeholder='Digite seu lembrete' />
      </div>
      <div className='row'>
        <button>Enviar lembrete</button>
      </div>
    </div>
  );
}

export default LembreteEntrada;