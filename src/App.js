import { logDOM } from '@testing-library/react';
import './App.css';
import React, { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Form1 from './components/Form1';
import Form2 from './components/Form2';



function App() {


  return (
    <div className="App">
      {/* <Form1 /> */}
      <Form2 />
    </div>
  );
}

export default App;
