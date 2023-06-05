import React, { useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { app } from '../Firebase';
import { doc, setDoc } from "firebase/firestore"; 

function Form3() {
    const db = getFirestore(app);

    const [formCompleted, setFormCompleted] = useState(false);
    const [sign1, setSign1] = useState();
    const [url, setUrl] = useState();


    const [nameOnCard, setNameOnCard] = useState("Diego Espinosa Leon")
    const [numOnCard, setNumOnCard] = useState("4152313133419833");

    const [ supplierName, setSupplierName] = useState();
    const [ position, setPosition] = useState();
    const [ printName, setPrintName] = useState();
    const [ date, setDate] = useState();

    function handleClear1(){
      sign1.clear();
    }

    async function handleSave(){
      let data = {
           
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

    function addExtraSpace(text) {
        return text.replace(/(.{4})/g, '$1 ');
    }

    function convertToBullets(text) {
        const bullet = '\u2022';
        const first12Characters = text.slice(0, 12);
        const bullets = bullet.repeat(first12Characters.length);
    
        return `${bullets}${text.slice(12)}`;
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


        <h1 id="title-authorization"> Authorization For Credit Card Payments </h1>
        <br></br>
        <div className='card-form'>
            <p id="nameOnCard"> {nameOnCard} </p>
            <p id="numOnCard"> {addExtraSpace(convertToBullets(numOnCard))} </p>
            <div className='two-col'>
                <p id="expOnCard"> EXP: 01/24 </p>
                <p id="cvcOnCard"> CVC: 123 </p>
            </div>
        </div>
        <br></br>
        <br></br>
        
        <div className='field'>
            <p> Company Name: </p>
            <input className="textInput" type='text' onChange={(event) => setSupplierName(event.target.value)} placeholder='Supplier Name' />
        </div>
        <div className='field'>
            <p> Mailing Address: </p>
            <input className="textInput" type='text' onChange={(event) => setSupplierName(event.target.value)} placeholder='Mailing Address' />
        </div>
        <div className='two-col'>
            <div className='field'>
                <p>  City: </p>
                <input className="textInput" type='text' onChange={(event) => setSupplierName(event.target.value)} placeholder='City' />
            </div>
            <div className='field'>
                <p>  Province: </p>
                <input className="textInput" type='text' onChange={(event) => setSupplierName(event.target.value)} placeholder='Province' />
            </div>
        </div>
        <div className='two-col'>
            <div className='field'>
                <p>  Email Address: </p>
                <input className="textInput" type='text' onChange={(event) => setSupplierName(event.target.value)} placeholder='Email Address' />
            </div>
            <div className='field'>
                <p>  Phone No: </p>
                <input className="textInput" type='text' onChange={(event) => setSupplierName(event.target.value)} placeholder='Phone No' />
            </div>
        </div>

        <br></br>

        <div className='field'>
            <p>  Jobsite Address: </p>
            <input className="textInput" type='text' onChange={(event) => setSupplierName(event.target.value)} placeholder='Jobsite Address' />
        </div>
        <div className='field'>
            <p>  Site Contact Person: </p>
            <input className="textInput" type='text' onChange={(event) => setSupplierName(event.target.value)} placeholder='Site Contact Person' />
        </div>
        
        <br></br>

        
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

export default Form3