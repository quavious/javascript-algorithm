import React from 'react';
import './App.css';

function algo(arr) {
  if(arr.length <= 1) return arr;
  else {
    const pivot = arr[0];
    const left = [];
    const right = [];

    for(let i=1; i<arr.length;i++){
      if(arr[i]<=pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }
    return algo(left).concat(pivot, algo(right));
  }
}

function App() {
  var arr = "9 4 6 7 3 1 0 5 2 15 10".split(" ").map(i => parseInt(i, 10))
  console.log(algo(arr));
  return <h1>HELLO WORLD!</h1>
}

export default App;
