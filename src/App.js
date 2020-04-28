import React from 'react';
import './App.css';

function algo(arr) {
  var flag = true
  for(var i=0;i<arr.length-1;i++){
    if(Math.abs(arr[i+1]-arr[i]) !== 1){
      flag = false;
      break;
    }
  }
  if(flag) return "YES";
  else return "NO";
}

function App() {
  var arr = "10 9 8 7 6".split(" ").map(i => parseInt(i, 10))
  console.log(algo(arr));
  return <h1>HELLO WORLD!</h1>
}

export default App;
