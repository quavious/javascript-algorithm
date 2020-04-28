import React from 'react';
import './App.css';

function algo() {
  var r = 0, products = 24;
  while(products>=3){
    if(products >= 7){
      r++;
      products-=7;
    }
    else if(products >= 3){
      r++;
      products-=3;
    }
  }
  return r
}

function App() {
  console.log(algo());
  return <h1>HELLO WORLD!</h1>
}

export default App;
