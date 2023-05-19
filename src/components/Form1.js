import React, { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { app } from '../Firebase';
import { doc, setDoc } from "firebase/firestore"; 

function Form1() {
    const db = getFirestore(app);

    const [sign, setSign] = useState();
    const [url, setUrl] = useState();

    function handleClear(){
      // CLEARS THE SIGN
      sign.clear();
    }

    async function handleSave(){
      let mySign = sign.getTrimmedCanvas().toDataURL('image/png').toString();
      let data = {
        name: "Diego", 
        company: "TTF SCAFFOLDING",
        sign: mySign
      }
      await setDoc(doc(db, "form1", "person3"), data);
    }

    const [typeOfBusiness, setTypeOfBusiness] = useState('');
    const [legalNameOfBusiness, setLegalNameOfBusiness] = useState();

    const handleTypeOfBusiness = (event) => {
      setTypeOfBusiness(event.target.value);
    };
    const handleLegalNameOfBusiness = (event) => {
        setTypeOfBusiness(event.target.value);
    };


    

  return (
    <div className='form1'>
        <h1> Application For Credit </h1>
        <p id="introduction"> The applicant (the “Customer”) hereby applying for credit to be extended to it by TTF Scaffolding Inc. (“TTF”) agrees to provide, on request, such further and other documents and information, including but not limited to financial statements and/or net worth statements, to TTF prior to credit being approved or extended. The Customer agrees that TTF is under no obligation to accept this application or to extend credit to the Customer. The Customer further agrees that if this application is accepted, TTF may refuse to extend credit, may increase the amount of credit, or may reduce the amount of credit previously extended, at any time without providing reasons for such refusal, increase, or reduction. If two or more principals, partners, companies or other legal entities are listed on this application, then the obligations and liabilities of such principals, partners, companies or other legal entities to TTF shall be joint and several. The terms and conditions of rental will be as specified in Terms and Conditions of TTF as provided to the Customer at the time of the application for credit, and as available at <a href='ttfscaffolding.com'>www.ttfscaffolding.com</a>.</p>

        <h2> Customer and related information </h2>


        {/* =======  TYPE OF BUSINESS  ======= */}
        <h3> Type of bussines:</h3>
        <label className='checkbox'>
          <input
            type="radio"
            value="Sole Propietor"
            checked={typeOfBusiness === 'Sole Propietor'}
            onChange={handleTypeOfBusiness}
          />
          Sole Propietor
        </label>

        <label className='checkbox'>
          <input
            type="radio"
            value="Incorporated Company"
            checked={typeOfBusiness === 'Incorporated Company'}
            onChange={handleTypeOfBusiness}
          />
          Incorporated Company
        </label>

        <label className='checkbox'>
          <input
            type="radio"
            value="Partnership"
            checked={typeOfBusiness === 'Partnership'}
            onChange={handleTypeOfBusiness}
          />
          Partnership
        </label>

        <div className='two-col'>
            <div className='field'>
                <p> Legal Name of Business </p>
                <input className="textInput" type='text' onChange={handleLegalNameOfBusiness} placeholder='Legal Name of Business' />
            </div>
            <div className='field'>
                <p> Business Registration # </p>
                <input className="textInput" type='text' placeholder='Business Registration #' />
            </div>
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Date Business Started </p>
                <input className="textInput" type='date' placeholder='Date Business Started' />
            </div>
            <div className='field'>
                <p> Number of Employees </p>
                <input className="textInput" type='number' placeholder='Number of Employees' />
            </div>
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> AP Phone: </p>
                <input className="textInput" type='tel' placeholder='AP Phone:' />
            </div>
            <div className='field'>
                <p> AP Email: </p>
                <input className="textInput" type='email' placeholder='AP Email:' />
            </div>
        </div>
        

        <div className='field'>
            <p> Bank Name: </p>
            <input className="textInput" type='text' placeholder='Bank Name:' />
        </div>
        <div className='field'>
            <p> Bank Branch Address: </p>
            <input className="textInput" type='text' placeholder='Bank Branch Address:' />
        </div>
        <div className='field'>
            <p> Line of Credit / Loan Amount: </p>
            <input className="textInput" type='text' placeholder='Line of Credit / Loan Amount:' />
        </div>



        <h3> #1 Owner / Share holder / Partner Information </h3>
        <div className='two-col'>
            <div className='field'>
                <p> Full Name </p>
                <input className="textInput" type='text' placeholder='Full name:' />
            </div>
            <div className='field'>
                <p> % of Customer entity: </p>
                <input className="textInput" type='text' placeholder='% of Customer entity:' />
            </div>
        </div>

        <div className='two-col'>
            <div className='field'>
                <p> Email: </p>
                <input className="textInput" type='text' placeholder='Email:' />
            </div>
            <div className='field'>
                <p> Phone: </p>
                <input className="textInput" type='text' placeholder='Phone:' />
            </div>
        </div>

        <div className='field'>
            <p> Home Address: </p>
            <input className="textInput" type='text' placeholder='Home Address:' />
        </div>


        <h3> #2 Owner / Share holder / Partner Information </h3>
        <div className='two-col'>
            <div className='field'>
                <p> Full Name </p>
                <input className="textInput" type='text' placeholder='Full name:' />
            </div>
            <div className='field'>
                <p> % of Customer entity: </p>
                <input className="textInput" type='text' placeholder='% of Customer entity:' />
            </div>
        </div>

        <div className='two-col'>
            <div className='field'>
                <p> Email: </p>
                <input className="textInput" type='text' placeholder='Email:' />
            </div>
            <div className='field'>
                <p> Phone: </p>
                <input className="textInput" type='text' placeholder='Phone:' />
            </div>
        </div>

        <div className='field'>
            <p> Home Address: </p>
            <input className="textInput" type='text' placeholder='Home Address:' />
        </div>

        <p id="introduction">The Customer hereby certifies that the above information is true and correct in all respects and agrees to notify TTF of any change that may affect the terms and conditions hereof, including, without limitation, any change in ownership or any material change in the Customer’s business. The Customer acknowledges that TTF is relying, and has relied, on the information set out herein agreeing to grant credit to the Customer. The authorized signatory(ies) signing below certify that they have the authority to bind the Customer to the terms contained herein and in the Terms and Conditions. This Application may be executed and delivered by electronic transmission.</p>

        <h3> Business References: </h3>
        <h3> Reference #1:</h3>
        <div className='field'>
            <p> Full Name: </p>
            <input className="textInput" type='text' placeholder='Full Name:' />
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Email: </p>
                <input className="textInput" type='text' placeholder='Email:' />
            </div>
            <div className='field'>
                <p> Phone: </p>
                <input className="textInput" type='text' placeholder='Phone:' />
            </div>
        </div>
        
        <h3> Reference #2:</h3>
        <div className='field'>
            <p> Full Name: </p>
            <input className="textInput" type='text' placeholder='Full Name:' />
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Email: </p>
                <input className="textInput" type='text' placeholder='Email:' />
            </div>
            <div className='field'>
                <p> Phone: </p>
                <input className="textInput" type='text' placeholder='Phone:' />
            </div>
        </div>

        <h3> Reference #3:</h3>
        <div className='field'>
            <p> Full Name: </p>
            <input className="textInput" type='text' placeholder='Full Name:' />
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Email: </p>
                <input className="textInput" type='text' placeholder='Email:' />
            </div>
            <div className='field'>
                <p> Phone: </p>
                <input className="textInput" type='text' placeholder='Phone:' />
            </div>
        </div>




     {/* <div style={{border:"1px solid black", width:500, height: 200}}>
        <SignatureCanvas 
          canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} 
          ref={data=>setSign(data)}
        ></SignatureCanvas>
      </div>
      <button onClick={()=> handleSave()}> Save </button>
      <button onClick={()=> handleClear()}> Clear </button>  */}


    </div>


  )
}

export default Form1
