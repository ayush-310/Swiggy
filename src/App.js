import React, { useEffect, useState } from 'react';
import './app.css';
import Header from './components/Header';
import Body from './components/Body';

// Main App Component
const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export default App;
