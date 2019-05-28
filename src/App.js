import React from 'react';
import logo from './logo.svg';
import './App.css';
import WhiteBoard from './components/WhiteBoard'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <div className="container">
        <WhiteBoard/>
      </div>
  );
}

export default App;
