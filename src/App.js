import React from 'react';
import './App.css';

function arrMerge(left, right){
  let result = [];

  while(left.length && right.length){
    if(left[0] <= right[0])
      result.push(left.shift());
    else
      result.push(right.shift());  
  }
  while(left.length) result.push(left.shift());
  while(right.length) result.push(right.shift());

  return result;
}

function algo(arr) {
  if(arr.length <= 1) return arr;

  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return arrMerge(algo(left), algo(right));
}

function App() {
  var arr = "9 4 6 7 3 1 0 5 2 15 8 10".split(" ").map(i => parseInt(i, 10))
  console.log(algo(arr));
  return <h1>HELLO WORLD!</h1>
}

export default App;
