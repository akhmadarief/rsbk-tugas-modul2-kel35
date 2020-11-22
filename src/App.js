import React from 'react';
import './App.css';
import CompAndProps from './components/CompAndProps';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <div className="Components">
          <CompAndProps bgcolor="#3ccf8e" />
        </div>
      </header>
    </div>
  );
}

export default App;
