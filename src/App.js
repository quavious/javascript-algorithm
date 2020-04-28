import React from 'react';
import './App.css';

function algo() {
  var num = 1000;
  var flag = 0;
  var result = []
  for(var i=1;i<=num;i++){
    result.push(...i.toString(10).split(""))
  }
  result.forEach(i => {
    if(i === "1") flag++;
  })
  return flag;
}

function App() {
  console.log(algo());
  return <h1>HELLO WORLD!</h1>
}

export default App;
