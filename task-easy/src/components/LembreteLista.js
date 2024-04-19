import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'

function LembreteLista({ lista }) {
  return (
    <div className='container mt-4'>
      <h2 className='fa-solid fa-list-check text-center text-primary mb-4'>Task Easy</h2>
      <div className='container border  border-secondary rounded p-2'>
        <h4 className='mb-2'>Lembretes:</h4>
        <ul className='list-group'>
          {
            lista.map((lembrete, index) =>
            <li key={index} className='list-group-item list-group-item-primary mb-2'>
              <div className='text-center p-2'>
                {lembrete}
               </div>
            </li>
          )}
        </ul>
      </div>
    </div>
);
}

export default LembreteLista;