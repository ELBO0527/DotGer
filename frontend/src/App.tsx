import React, {useState, useEffect} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  
  const [message, setMessage]=useState('');
 // 변수 초기화
 function callback(str : string) {
  setMessage(str);
}

// 첫 번째 렌더링을 마친 후 실행
useEffect(
    () => {
      axios({
          url: '/api',
          method: 'GET'
      }).then((res) => {
          callback(res.data);
      })
    }, []
);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Button variant="contained">{message}</Button >
        </a>
      </header>
    </div>
  );
}

export default App;
