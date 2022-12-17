import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Router, Route, Link } from 'react-router-dom';
import Youtube from './components/Youtube';
import Main from './Main'; 
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/components/Youtube">
            link
          </Link>
				<Routes>
          <Route path="/" element={<Main />}></Route>
					<Route path="/components/Youtube" element={<Youtube />}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
