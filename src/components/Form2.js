import React, { useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { app } from '../Firebase';
import { doc, setDoc } from "firebase/firestore"; 

function Form2() {
    const db = getFirestore(app);

    const [formCompleted, setFormCompleted] = useState(false);
    const [sign1, setSign1] = useState();
    const [url, setUrl] = useState();

    const [supplierName, setSupplierName] = useState();
    const [contactName, setContactName] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [faxNo, setFaxNo] = useState();
    const [customerName, setCustomerName] = useState();
    const [timeWithAccount, setTimeWithAccount] = useState();
    const [termsOfRepayment, setTermsOfRepayment] = useState();
    const [approvedCredit, setApprovedCredit] = useState();
    const [currentBalance, setCurrentBalance] = useState();
    const [pastDueBalance, setPastDueBalance] = useState();
    const [dateOfPurchase, setDateOfPurchase] = useState();
    const [repaymentHistory, setRepaymentHistory] = useState();
    const [frecuencyLatePayment, setFrecuencyLatePayment] = useState();
    const [customerQualification, setCustomerQualification] = useState();
    const [additionalComments, setAdditionalComments] = useState();
    const [printName, setPrintName] = useState();
    const [position, setPosition] = useState();
    const [date, setDate] = useState();
    const [sign, setSign] = useState();

    function handleClear1(){
      sign1.clear();
    }

    async function handleSave(){
      let data = {
            supplierName, 
            contactName, 
            phoneNo, 
            emailAddress, 
            faxNo, 
            customerName, 
            timeWithAccount, 
            termsOfRepayment, 
            approvedCredit, 
            currentBalance, 
            pastDueBalance, 
            dateOfPurchase, 
            repaymentHistory, 
            frecuencyLatePayment, 
            customerQualification, 
            additionalComments, 
            printName, 
            position,
            date, 
            sign : sign1.getTrimmedCanvas().toDataURL('image/png').toString(),
      }
      try {
          await setDoc(doc(db, "form2", supplierName), data);
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
        <h1> Credit Request </h1>
        
        <div className='field'>
            <p> Supplier Name: </p>
            <input className="textInput" type='text' onChange={(event) => setSupplierName(event.target.value)} placeholder='Supplier Name' />
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Contact Name </p>
                <input className="textInput" type='text' onChange={(event) => setContactName(event.target.value)} placeholder='Contact Name' />
            </div>
            <div className='field'>
                <p> Phone No. </p>
                <input className="textInput" type='text' onChange={(event) => setPhoneNo(event.target.value)} placeholder='Phone No.' />
            </div>
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Email Address </p>
                <input className="textInput" type='text' onChange={(event) => setEmailAddress(event.target.value)} placeholder='Email Address' />
            </div>
            <div className='field'>
                <p> Fax No. </p>
                <input className="textInput" type='text' onChange={(event) => setFaxNo(event.target.value)} placeholder='Fax No.' />
            </div>
        </div>

        <div className='field'>
            <p> Customer Name: </p>
            <input className="textInput" type='text' onChange={(event) => setCustomerName(event.target.value)} placeholder='Customer Name' />
        </div>

        <br></br>
        <h2> Customer Credit Details: </h2>
        
        <div className='field' id="doubleHeight">
            <p id="longText"> How long has this customer had an account with your company ? </p>
            <input className="textInput" type='text' onChange={(event) => setTimeWithAccount(event.target.value)} placeholder='' />
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Terms of repayment </p>
                <input className="textInput" type='text' onChange={(event) => setTermsOfRepayment(event.target.value)} placeholder='Terms of repayment' />
            </div>
            <div className='field'>
                <p> Approved Credit Limit </p>
                <input className="textInput" type='text' onChange={(event) => setApprovedCredit(event.target.value)} placeholder='Approved Credit Limit' />
            </div>
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Current Balance </p>
                <input className="textInput" type='text' onChange={(event) => setCurrentBalance(event.target.value)} placeholder='Current Balance' />
            </div>
            <div className='field'>
                <p> Past Due Balance </p>
                <input className="textInput" type='text' onChange={(event) => setPastDueBalance(event.target.value)} placeholder='Past Due Balance' />
            </div>
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Date of Last Purchase </p>
                <input className="textInput" type='date' onChange={(event) => setDateOfPurchase(event.target.value)} />
            </div>
            <div className='field'>
                <p> Typical Repayment History </p>
                <select onChange={(event) => setRepaymentHistory(event.target.value)} >
                    <option selected default> Select an option </option>
                    <option> Less than 30 days </option>
                    <option> 30 to 60 days </option>
                    <option> 60 to 90 days </option>
                    <option> More than 90 days </option>
                </select>
            </div>
        </div>
        <div className='two-col'>
            <div className='field'>
                <p> Frecuency of late payment </p>
                <select onChange={(event) => setFrecuencyLatePayment(event.target.value)} >
                    <option selected default> Select an option </option>
                    <option> Less than 10% </option>
                    <option> 10 to 25% </option>
                    <option> 25 to 50% </option>
                    <option> More than 50% </option>
                </select>
            </div>
            <div className='field'>
                <p> Qualification as customer </p>
                <select onChange={(event) => setCustomerQualification(event.target.value)} >
                    <option selected default> Select an option </option>
                    <option> Excelent </option>
                    <option> Above Average </option>
                    <option> Average </option>
                    <option> Below Average </option>
                </select>
            </div>
        </div>
        <div className='field' id="textArea">
            <p> Additional Comments </p>
            <textarea rows={5} onChange={(event) => setAdditionalComments(event.target.value)}  placeholder='Additional Comments'></textarea>
        </div>
        
        <br></br>
        <hr></hr>

        <div className='two-col'>
            <div>
                <div className='field'>
                    <p> Print Name: </p>
                    <input className="textInput" type='text' onChange={(event) => setPrintName(event.target.value)} placeholder='Print Name:' />
                </div>
                <div className='field'>
                    <p> Position: </p>
                    <input className="textInput" type='text' onChange={(event) => setPosition(event.target.value)} placeholder='Position:' />
                </div>
                <div className='field'>
                    <p> Date : </p>
                    <input className="textInput" type='date' onChange={(event) => setDate(event.target.value)} placeholder='Date:' />
                </div>
            </div>
            <div>
                <p id="sign"> Sign: </p>
                <div className='wrapper-signPad'>
                    <div style={{width:340, height: 160}}>
                        <SignatureCanvas 
                          canvasProps={{width: 340, height: 170, className: 'sigCanvas'}} 
                          ref={sign1=>setSign1(sign1)}
                        ></SignatureCanvas>
                    </div>
                </div>
                <button className="btnClear" onClick={()=> handleClear1()}> Clear </button> 
            </div>
        </div>
        <button className='btnSubmit' onClick={()=> handleSave()}> Submit </button>
    </div>
  )
}

export default Form2

