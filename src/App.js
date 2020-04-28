import React from 'react';
import './App.css';

function algo(arr) {
  var flag1=0, flag2=0, flag3 = 0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]==="(") flag1++;
    else if(arr[i] === ")") flag1--;
    else if(arr[i]==="{") flag2++;
    else if(arr[i] === "}") flag2--;
    else if(arr[i]==="[") flag3++;
    else if(arr[i] === "]") flag3--;

    if(flag1<0 || flag2<0 || flag3<0) {
      return "NO";
    }
  }
  if(flag1 === 0 && flag2 === 0 && flag3 === 0) return "YES"
  return "NO";
}

function App() {
  var arr = "(()){[".split("")
  console.log(algo(arr));
  return <h1>HELLO WORLD!</h1>
}

export default App;
