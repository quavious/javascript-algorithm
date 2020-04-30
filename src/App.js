import React from 'react';
import './App.css';

function makeTable(num){
  const table = []
  for(var i=0;i<=num;i++) table.push(true)
  for(let j=2;j*j<=num;j++){
    if(table[j]){
      for(let k=j*j;k<=num;k+=j){
        table[k] = false;
      }
    }
  }
  table.splice(0,2,false, false)
  return table
  
}

function algo() {
  var num = 300
  var table = makeTable(num);
  var result = []
  for(let n=2;n<=num/2;n++){
    if(table[n] && table[num-n]){
      result.push([n,num-n]);
    }
  }
  return result
}

function App() {
  console.log(algo());
  return <h1>HELLO WORLD!</h1>
}

export default App;
