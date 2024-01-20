import React from 'react';
import ReactDOM from 'react-dom/client';
import index from './them/index.css'
import {TaksList} from './view/App';
const newTask = ReactDOM.createRoot(document.getElementById('tasks'));
newTask.render(
  <React.StrictMode>
  <TaksList/>
    </React.StrictMode>
);