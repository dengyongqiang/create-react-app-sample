import React from 'react';
import './App.css';
import { Alert } from './Alert';

function App() {
  return (
    <div className="container">
      <Alert
        heading="Success"
        children="Everything is really good"
        closable={true}
      />
    </div>
  );
}

export default App;
