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

import CreditApplications from "./pages/CreditApplications"
import CreditRequest from "./pages/CreditRequest"
import CreditCardAuthorizations from "./pages/CreditCardAuthorizations"
import Sheet from "./pages/Sheet"
import SheetCreditRequest from "./pages/SheetCreditRequest"
import SheetCardAuthorization from './pages/SheetCardAuthorization'

import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";

function App() {
  return (
    <div className="App">
      <div>
        
        <Router>
          <div className="App">
            <div className="content">

              {/* ===== ADMIN ACCESS ===== */}
              <Routes>
                <Route path="/creditApplication" element={<CreditApplications />} />
              </Routes>
              <Routes>
                <Route path="/creditRequest" element={<CreditRequest />} />
              </Routes>
              <Routes>
                <Route path="/creditCardAuthorization" element={<CreditCardAuthorizations/>} />
              </Routes>
              <Routes>
                <Route path="/sheet" element={<Sheet />} />
              </Routes>
              <Routes>
                <Route path="/sheetCreditRequest" element={<SheetCreditRequest/>} />
              </Routes>
              <Routes>
                <Route path="/sheetCardAuthorization" element={<SheetCardAuthorization/>} />
              </Routes>
 

              {/* ===== CUSTOMER ACCESS ===== */}

              <Routes>
                <Route path="/" element={<Form1 />} />
              </Routes>
              <Routes>
                <Route path="/form-applicationsForCredit" element={<Form1 />} />
              </Routes>
              <Routes>
                <Route path="/form-creditRequest" element={<Form2 />} />
              </Routes>
              <Routes>
                <Route path="/form-creditCardAuthorization" element={<Form3 />} />
              </Routes>
            </div>
          </div>
        </Router>        
      </div>
    </div>
  );
}

export default App;
