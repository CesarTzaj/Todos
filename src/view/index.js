import React from 'react';
import ReactDOM from 'react-dom/client';
import '../them/index.css'
import {TaksList, Prueba, NewTaks} from './App.js';
const newTask = ReactDOM.createRoot(document.getElementById('tasks'));
newTask.render(
  <React.StrictMode>
  <TaksList/>
    </React.StrictMode>
);


