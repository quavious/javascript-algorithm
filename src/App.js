import React from 'react';
import './App.css';

function algo() {
  var r = []
  var tower = ["ABCDEF","BCAD","ADEFQRX","BEDFG","EFGHZ"]
  tower.forEach(t => {
    if(t === t.split("").sort().join(""))
      r.push("YES")
    else
      r.push("NO")  
  })
  return r
}

function App() {
  console.log(algo());
  return <h1>HELLO WORLD!</h1>
}

export default App;
