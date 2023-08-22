import './App.css';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Main

        />} />

      </Routes>
    </div>
  );
}

export default App;
