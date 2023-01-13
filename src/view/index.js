import React from 'react';
import ReactDOM from 'react-dom/client';
import '../them/index.css';
import {TaksList} from './App.js';
const newTask = ReactDOM.createRoot(document.getElementById('tasks'));
newTask.render(
  <React.StrictMode>
  <TaksList/>
    </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {TaksList} from './App.js';
// import '../them/index.css'

// ReactDOM.render(
//   <TaksList />,
//   document.getElementById('tasks')
// );