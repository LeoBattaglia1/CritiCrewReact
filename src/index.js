import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let ButtonSiguiente = document.getElementById("siguiente");

ReactDOM.render(<App />, document.getElementById('root1'));
ReactDOM.render(<App />, document.getElementById('root2'));
ReactDOM.render(<App />, document.getElementById('root3'));
ReactDOM.render(<App />, document.getElementById('root4'));

ButtonSiguiente.addEventListener('click', () => {
    window.location.reload();
  });



