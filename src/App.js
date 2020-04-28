import React from 'react';
import './App.css';

function algo() {
  var result = ""
  var str = "Hello World To Javascript".split(" ").forEach(s => result += s[0])
  return result

}

function App() {
  console.log(algo());
  return <h1>HELLO WORLD!</h1>
}

export default App;
