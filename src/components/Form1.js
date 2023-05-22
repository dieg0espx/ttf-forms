import React, { useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { app } from '../Firebase';
import { doc, setDoc } from "firebase/firestore"; 

function Form1() {
    const db = getFirestore(app);

    const [formCompleted, setFormCompleted] = useState(false);
    const [sign1, setSign1] = useState();
    const [sign2, setSign2] = useState();
    const [url, setUrl] = useState();

    const [typeOfBusiness, setTypeOfBusiness] = useState();
    const [legalNameOfBusiness, setLegalNameOfBusiness] = useState();
    const [businessRegistrationNo, setBusinessRegistrationNo] = useState();
    const [businessStreetAddress, setBusinessStreetAddress] = useState();
    const [dateBusinessStarted, setDateBusinessStarted] = useState();
    const [noEmployees, setNoEmployees] = useState();
    const [apPhone, setApPhone] = useState();
    const [apEmail, setApEmail] = useState();
    const [bankName, setBankName] = useState();
    const [bankBranchAddress, setBankBranchAddress] = useState();
    const [lineOfCredit, setLineOfCredit] = useState();
    const [owner1Name, setOwner1Name] = useState();
    const [owner1Percentage, setOwner1Porcentage] = useState();
    const [owner1Email, setOwner1Email] = useState();
    const [owner1Phone, setOwner1Phone] = useState();
    const [owner1Address, setOwner1Address] = useState();
    const [owner2Name, setOwner2Name] = useState("");
    const [owner2Percentage, setOwner2Porcentage] = useState("");
    const [owner2Email, setOwner2Email] = useState("");
    const [owner2Phone, setOwner2Phone] = useState("");
    const [owner2Address, setOwner2Address] = useState("");
    const [reference1Name, setReference1Name] = useState();
    const [reference1Email, setReference1Email] = useState();
    const [reference1Phone, setReference1Phone] = useState();
    const [reference2Name, setReference2Name] = useState();
    const [reference2Email, setReference2Email] = useState();
    const [reference2Phone, setReference2Phone] = useState();
    const [reference3Name, setReference3Name] = useState();
    const [reference3Email, setReference3Email] = useState();
    const [reference3Phone, setReference3Phone] = useState();
    const [signatory1Name, setSignatory1Name] = useState();
    const [signatory1Date, setSignatory1Date] = useState();
    const [signatory1Sign, setSignatory1Sign] = useState();
    const [signatory2Name, setSignatory2Name] = useState("");
    const [signatory2Date, setSignatory2Date] = useState("");
    const [signatory2Sign, setSignatory2Sign] = useState("");


      
    
      function handleClear1(){
        // CLEARS THE SIGN
        sign1.clear();
      }
      function handleClear2(){
        // CLEARS THE SIGN
        sign2.clear();
      }
  
      async function handleSave(){

        let data = {
         typeOfBusiness,
         legalNameOfBusiness, 
         businessRegistrationNo, 
         businessStreetAddress,
         dateBusinessStarted, 
         noEmployees,
         apPhone, 
         apEmail, 
         bankName, 
         bankBranchAddress, 
         lineOfCredit, 
         owner1Name, 
         owner1Percentage, 
         owner1Email, 
         owner1Phone, 
         owner1Address, 
         owner2Name, 
         owner2Percentage, 
         owner2Email, 
         owner2Phone, 
         owner2Address, 
         reference1Name, 
         reference1Email, 
         reference1Phone, 
         reference2Name, 
         reference2Email, 
         reference2Phone, 
         reference3Name, 
         reference3Email, 
         reference3Phone, 
         signatory1Name, 
         signatory1Date,
         signatory1Sign : sign1.getTrimmedCanvas().toDataURL('image/png').toString(),
         signatory2Name, 
         signatory2Date,
         signatory2Sign : sign2.getTrimmedCanvas().toDataURL('image/png').toString()
        }
        try {
            await setDoc(doc(db, "form1", legalNameOfBusiness), data);
            setFormCompleted(true);
          } catch (error) {
            // console.error("Error writing document: ", error);
            alert("You are missing some fields.")
          }
      }


  return (
    <div className='form1'>
        <div className='confirmation' style={{display:formCompleted ? "flex":"none"}}>
            <i className="bi bi-check-circle iconCheck"></i>
            <h1> Application Completed </h1>
            <p> Thanks !</p>
        </div>

        <div className='header'>
            <img src='https://ttfscaffolding.com/wp-content/uploads/2022/11/logo-1.png'></img>
        </div>
        <h1> Application For Credit </h1>
        <p id="introduction"> The applicant (the “Customer”) hereby applying for credit to be extended to it by TTF Scaffolding Inc. (“TTF”) agrees to provide, on request, such further and other documents and information, including but not limited to financial statements and/or net worth statements, to TTF prior to credit being approved or extended. The Customer agrees that TTF is under no obligation to accept this application or to extend credit to the Customer. The Customer further agrees that if this application is accepted, TTF may refuse to extend credit, may increase the amount of credit, or may reduce the amount of credit previously extended, at any time without providing reasons for such refusal, increase, or reduction. If two or more principals, partners, companies or other legal entities are listed on this application, then the obligations and liabilities of such principals, partners, companies or other legal entities to TTF shall be joint and several. The terms and conditions of rental will be as specified in Terms and Conditions of TTF as provided to the Customer at the time of the application for credit, and as available at <a href='ttfscaffolding.com'>www.ttfscaffolding.com</a>.</p>

        <h3> Customer and related information </h3>


 
        <h3> Type of bussines:</h3>
        <label className='checkbox'>
          <input
            type="radio"
            value="Sole Propietor"
            checked={typeOfBusiness === 'Sole Propietor'}
            onChange={(event) => setTypeOfBusiness(event.target.value)}
          />
          Sole Propietor
        </label>
        <label className='checkbox'>
          <input
            type="radio"
            value="Incorporated Company"
            checked={typeOfBusiness === 'Incorporated Company'}
            onChange={(event) => setTypeOfBusiness(event.target.value)}
            />
          Incorporated Company
        </label>
        <label className='checkbox'>
          <input
            type="radio"
            value="Partnership"
            checked={typeOfBusiness === 'Partnership'}
            onChange={(event) => setTypeOfBusiness(event.target.value)}
            />
          Partnership
        </label>

        <br></br>
       

        <div className='two-col'>
            <div className='field'>
                <p> Legal Name of Business </p>
                <input className="textInput" type='text' onChange={(event) => setLegalNameOfBusiness(event.target.value)} placeholder='Legal Name of Business' />
            </div>
            <div className='field'>
                <p> Business Registration # </p>
                <input className="textInput" type='text' onChange={(event) => setBusinessRegistrationNo(event.target.value)} placeholder='Business Registration #' />
            </div>
        </div>
        <div className='field'>
            <p> Business Street Address: </p>
            <input className="textInput" type='text' onChange={(event) => setBusinessStreetAddress(event.target.value)} placeholder='Date Business Started' />
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Date Business Started </p>
                <input className="textInput" type='date' onChange={(event) => setDateBusinessStarted(event.target.value)} placeholder='Date Business Started' />
            </div>
            <div className='field'>
                <p> Number of Employees </p>
                <input className="textInput" type='number' onChange={(event) => setNoEmployees(event.target.value)} placeholder='Number of Employees' />
            </div>
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> AP Phone: </p>
                <input className="textInput" type='tel' onChange={(event) => setApPhone(event.target.value)} placeholder='AP Phone:' />
            </div>
            <div className='field'>
                <p> AP Email: </p>
                <input className="textInput" type='email' onChange={(event) => setApEmail(event.target.value)} placeholder='AP Email:' />
            </div>
        </div>
        

        <div className='field'>
            <p> Bank Name: </p>
            <input className="textInput" type='text' onChange={(event) => setBankName(event.target.value)} placeholder='Bank Name:' />
        </div>
        <div className='field'>
            <p> Bank Branch Address: </p>
            <input className="textInput" type='text' onChange={(event) => setBankBranchAddress(event.target.value)} placeholder='Bank Branch Address:' />
        </div>
        <div className='field'>
            <p> Line of Credit / Loan Amount: </p>
            <input className="textInput" type='text' onChange={(event) => setLineOfCredit(event.target.value)} placeholder='Line of Credit / Loan Amount:' />
        </div>



        <h3> #1 Owner / Share holder / Partner Information </h3>
        <div className='two-col'>
            <div className='field'>
                <p> Full Name </p>
                <input className="textInput" type='text' onChange={(event) => setOwner1Name(event.target.value)} placeholder='Full name:' />
            </div>
            <div className='field'>
                <p> % of Customer entity: </p>
                <input className="textInput" type='text' onChange={(event) => setOwner1Porcentage(event.target.value)} placeholder='% of Customer entity:' />
            </div>
        </div>

        <div className='two-col'>
            <div className='field'>
                <p> Email: </p>
                <input className="textInput" type='text' onChange={(event) => setOwner1Email(event.target.value)} placeholder='Email:' />
            </div>
            <div className='field'>
                <p> Phone: </p>
                <input className="textInput" type='text' onChange={(event) => setOwner1Phone(event.target.value)} placeholder='Phone:' />
            </div>
        </div>

        <div className='field'>
            <p> Home Address: </p>
            <input className="textInput" type='text' onChange={(event) => setOwner1Address(event.target.value)} placeholder='Home Address:' />
        </div>


        <h3> #2 Owner / Share holder / Partner Information </h3>
        <div className='two-col'>
            <div className='field'>
                <p> Full Name </p>
                <input className="textInput" type='text' onChange={(event) => setOwner2Name(event.target.value)} placeholder='Full name:' />
            </div>
            <div className='field'>
                <p> % of Customer entity: </p>
                <input className="textInput" type='text' onChange={(event) => setOwner2Porcentage(event.target.value)} placeholder='% of Customer entity:' />
            </div>
        </div>

        <div className='two-col'>
            <div className='field'>
                <p> Email: </p>
                <input className="textInput" type='text' onChange={(event) => setOwner2Email(event.target.value)} placeholder='Email:' />
            </div>
            <div className='field'>
                <p> Phone: </p>
                <input className="textInput" type='text' onChange={(event) => setOwner2Phone(event.target.value)} placeholder='Phone:' />
            </div>
        </div>

        <div className='field'>
            <p> Home Address: </p>
            <input className="textInput" type='text' onChange={(event) => setOwner2Address(event.target.value)} placeholder='Home Address:' />
        </div>

        <p id="introduction">The Customer hereby certifies that the above information is true and correct in all respects and agrees to notify TTF of any change that may affect the terms and conditions hereof, including, without limitation, any change in ownership or any material change in the Customer’s business. The Customer acknowledges that TTF is relying, and has relied, on the information set out herein agreeing to grant credit to the Customer. The authorized signatory(ies) signing below certify that they have the authority to bind the Customer to the terms contained herein and in the Terms and Conditions. This Application may be executed and delivered by electronic transmission.</p>

        <h3> Business References: </h3>
        <h3> Reference #1:</h3>
        <div className='field'>
            <p> Full Name: </p>
            <input className="textInput" type='text' onChange={(event) => setReference1Name(event.target.value)} placeholder='Full Name:' />
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Email: </p>
                <input className="textInput" type='text' onChange={(event) => setReference1Email(event.target.value)} placeholder='Email:' />
            </div>
            <div className='field'>
                <p> Phone: </p>
                <input className="textInput" type='text'onChange={(event) => setReference1Phone(event.target.value)} placeholder='Phone:' />
            </div>
        </div>
        
        <h3> Reference #2:</h3>
        <div className='field'>
            <p> Full Name: </p>
            <input className="textInput" type='text' onChange={(event) => setReference2Name(event.target.value)} placeholder='Full Name:' />
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Email: </p>
                <input className="textInput" type='text' onChange={(event) => setReference2Email(event.target.value)} placeholder='Email:' />
            </div>
            <div className='field'>
                <p> Phone: </p>
                <input className="textInput" type='text' onChange={(event) => setReference2Phone(event.target.value)} placeholder='Phone:' />
            </div>
        </div>

        <h3> Reference #3:</h3>
        <div className='field'>
            <p> Full Name: </p>
            <input className="textInput" type='text' onChange={(event) => setReference3Name(event.target.value)} placeholder='Full Name:' />
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Email: </p>
                <input className="textInput" type='text' onChange={(event) => setReference3Email(event.target.value)} placeholder='Email:' />
            </div>
            <div className='field'>
                <p> Phone: </p>
                <input className="textInput" type='text' onChange={(event) => setReference3Phone(event.target.value)} placeholder='Phone:' />
            </div>
        </div>

        <br></br>
        <hr></hr>


        <div className='wrapper-signatures'>
            <div className='signer'>
                <div className='field'>
                        <p> Name of authorized signatory: </p>
                        <input className="textInput" type='text' onChange={(event) => setSignatory1Name(event.target.value)} placeholder='Name of authorized signatory:' />
                </div>
                <div className='field'>
                        <p> Date : </p>
                        <input className="textInput" type='date' onChange={(event) => setSignatory1Date(event.target.value)} placeholder='Date:' />
                </div>
                <p> Sign: </p>
                <div className='wrapper-signPad'>
                    <div style={{width:340, height: 200}}>
                        <SignatureCanvas 
                          canvasProps={{width: 340, height: 200, className: 'sigCanvas'}} 
                          ref={sign1=>setSign1(sign1)}
                        ></SignatureCanvas>
                    </div>
                </div>
                <button className="btnClear" onClick={()=> handleClear1()}> Clear </button> 
            </div>
            <div className='signer'>
                <div className='field'>
                        <p> Name of authorized signatory: </p>
                        <input className="textInput" type='text' onChange={(event) => setSignatory2Name(event.target.value)} placeholder='Name of authorized signatory:' />
                </div>
                <div className='field'>
                        <p> Date : </p>
                        <input className="textInput" type='date' onChange={(event) => setSignatory2Date(event.target.value)} placeholder='Date:' />
                </div>
                <p> Sign: </p>
                <div className='wrapper-signPad'>
                    <div style={{width:340, height: 200}}>
                        <SignatureCanvas 
                          canvasProps={{width: 340, height: 200, className: 'sigCanvas'}} 
                          ref={sign2=>setSign2(sign2)}
                        ></SignatureCanvas>
                    </div>
                </div>
                <button className="btnClear" onClick={()=> handleClear2()}> Clear </button> 
            </div>
            
        </div>
      <button className='btnSubmit' onClick={()=> handleSave()}> Submit </button>
    </div>
  )
}

export default Form1

