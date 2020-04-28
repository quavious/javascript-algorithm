import React from 'react';
import './App.css';

function algo() {
  var students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일']
  students.forEach((s, idx) => {
    console.log(`번호 : ${idx+1}, 이름 : ${s}`)
  })
}

function App() {
  console.log(algo());
  return <h1>HELLO WORLD!</h1>
}

export default App;
