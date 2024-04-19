import React from 'react';

function LembreteLista({ lista }) {
  return (
    <div className='container border border-1 border-secondary rounded'>
      <div>
        <h2>Lembretes</h2>
        <ul>
          {
            lista.map((lembrete, index) =>
              <li key={index}>{lembrete}</li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default LembreteLista;