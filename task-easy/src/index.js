import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='container border rounded mt-2'>
      Hello, Lembretes!
    </div>
  );
}   

ReactDOM.render(
<App />,
 document.getElementById('root'));