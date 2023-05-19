import { logDOM } from '@testing-library/react';
import './App.css';
import React, { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

function App() {
const [sign, setSign] = useState();
const [url, setUrl] = useState();

function handleClear(){
  sign.clear();
}

function handleSave(){
  setUrl(sign.getTrimmedCanvas().toDataURL('image/png'));
  // console.log(sign);
}

console.log(url);

  return (
    <div className="App">
      <div style={{border:"1px solid black", width:500, height: 200}}>
          <SignatureCanvas 
            canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} 
            ref={data=>setSign(data)}
          ></SignatureCanvas>
      </div>
      <button onClick={()=> handleSave()}> Save </button>
      <button onClick={()=> handleClear()}> Clear </button>
    </div>
  );
}

export default App;
