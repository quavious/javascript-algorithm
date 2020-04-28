import React from 'react';
import './App.css';

function algo() {
  var num = 12345678900
  var result = "";

  while(num){
    result = (num%1000).toString(10) + "," + result
    num = parseInt(num/1000);
  }
  return result.slice(0, result.length-1);
}

function App() {
  console.log(algo());
  return <h1>HELLO WORLD!</h1>
}

export default App;
