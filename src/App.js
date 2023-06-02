import { logDOM } from "@testing-library/react";
import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useActionData,
} from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";

function App() {
  return (
    <div className="App">
      <div>
        
        <Router>
          <div className="App">
            <div className="content">
              <Routes>
                <Route path="/" element={<Form1 />} />
              </Routes>
              <Routes>
                <Route path="/applicationsForCredit" element={<Form1 />} />
              </Routes>
              <Routes>
                <Route path="/creditRequest" element={<Form2 />} />
              </Routes>
            </div>
          </div>
        </Router>        
      </div>
    </div>
  );
}

export default App;
