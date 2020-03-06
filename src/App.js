import React from 'react';
import './App.css';
import './styles/applicationcss.css';
import Routes from './components/Route';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
