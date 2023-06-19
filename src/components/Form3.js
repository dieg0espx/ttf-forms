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


    const [nameOnCard, setNameOnCard] = useState("")
    const [numOnCard, setNumOnCard] = useState("");
    const [expirationOnCard, setExpirationOnCard]= useState("");
    const [codeOnCard, setCodeOnCard] = useState("")

    const [companyName, setCompanyName] = useState()
    const [mailingAddress, setMailingAddress] = useState()
    const [city, setCity] = useState()
    const [province, setProvince] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [jobsiteAddress,setJobsiteAddress] = useState()
    const [siteContact, setSiteContact] = useState()

    const [ position, setPosition] = useState();
    const [ printName, setPrintName] = useState();
    const [ date, setDate] = useState();

    const [checked, setChecked] = useState(false);

    function handleClear1(){
      sign1.clear();
    }

    async function handleSave(){
        if(checked){
            let data = {
                companyName, 
                mailingAddress, 
                city, 
                province, 
                email, 
                phone, 
                jobsiteAddress, 
                siteContact,
                printName, 
                position,
                date, 
                checked, 
                nameOnCard, 
                numOnCard, 
                expirationOnCard,
                codeOnCard, 
                sign : sign1.getTrimmedCanvas().toDataURL('image/png').toString(),
              }
            try {
                await setDoc(doc(db, "form3", companyName), data);
                setFormCompleted(true);
              } catch (error) {
                // console.error("Error writing document: ", error);
                alert("You are missing some fields.")
            }
        } else {
            alert("You have to check the authorization before proceed")
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


    const handleExpiration = (event) => {
        const { value } = event.target;
        const sanitizedValue = value.replace(/\//g, '');
        if (sanitizedValue.length >= 2) {
          const formattedValue = sanitizedValue.slice(0, 2) + '/' + sanitizedValue.slice(2);
          setExpirationOnCard(formattedValue);
        } else {
          setExpirationOnCard(sanitizedValue);
        }
    };

    function detectCardType(cardNumber) {
        const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
        const mastercardPattern = /^5[1-5][0-9]{14}$/;
        const amexPattern = /^3[47][0-9]{13}$/;
      
        if (visaPattern.test(cardNumber)) {
          return 'Visa';
        } else if (mastercardPattern.test(cardNumber)) {
          return 'Mastercard';
        } else if (amexPattern.test(cardNumber)) {
          return 'American Express';
        } else {
          return '';
        }
    }

    function handleCheckBox(){
        setChecked(!checked);
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
        <div id="wrapper-card">
            <div className='card-form'> 
                <div className='card-details'>
                    <p id="providerOnCard"> {detectCardType(numOnCard)}</p>
                    <p id="nameOnCard"> {nameOnCard} </p>
                    <p id="numOnCard"> {addExtraSpace(numOnCard)} </p>
                    <div className='two-col'>
                        <p id="expOnCard"> {expirationOnCard.length > 0 ? "EXP: " + expirationOnCard: ""} </p>
                        <p id="cvcOnCard"> {codeOnCard.length > 0 ? "CVC: " + convertToBullets(codeOnCard): ""} </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='field'>
                    <p> Name on Card: </p>
                    <input className="textInput" type='text' onChange={(event) => setNameOnCard(event.target.value)} placeholder='Name on card' />
                </div>
                <div className='field'>
                    <p> Card Number (16-digit): </p>
                    <input className="textInput" type='text' onChange={(event) => setNumOnCard(event.target.value)} placeholder='Card Number (16-digit)' />
                </div>
                <div className='two-col'>
                    <div className='field'>
                        <p> Expiration: </p>
                        <input className="textInput" type='text' value={expirationOnCard} onChange={handleExpiration} placeholder='MM / YY' />
                    </div>
                    <div className='field'>
                        <p> CVC: </p>
                        <input className="textInput" type='password' onChange={(event) => setCodeOnCard(event.target.value)} placeholder='Code' />
                    </div>
                </div>
            </div>
        </div>
        
        <br></br>
        <br></br>
        
        <div className='field'>
            <p> Company Name: </p>
            <input className="textInput" type='text' onChange={(event) => setCompanyName(event.target.value)} placeholder='Company Name' />
        </div>
        <div className='field'>
            <p> Mailing Address: </p>
            <input className="textInput" type='text' onChange={(event) => setMailingAddress(event.target.value)} placeholder='Mailing Address' />
        </div>
        <div className='two-col'>
            <div className='field'>
                <p>  City: </p>
                <input className="textInput" type='text' onChange={(event) => setCity(event.target.value)} placeholder='City' />
            </div>
            <div className='field'>
                <p>  Province: </p>
                <input className="textInput" type='text' onChange={(event) => setProvince(event.target.value)} placeholder='Province' />
            </div>
        </div>
        <div className='two-col'>
            <div className='field'>
                <p>  Email Address: </p>
                <input className="textInput" type='text' onChange={(event) => setEmail(event.target.value)} placeholder='Email Address' />
            </div>
            <div className='field'>
                <p>  Phone No: </p>
                <input className="textInput" type='text' onChange={(event) => setPhone(event.target.value)} placeholder='Phone No' />
            </div>
        </div>

        <br></br>

        <div className='field'>
            <p>  Jobsite Address: </p>
            <input className="textInput" type='text' onChange={(event) => setJobsiteAddress(event.target.value)} placeholder='Jobsite Address' />
        </div>
        <div className='field'>
            <p>  Site Contact Person: </p>
            <input className="textInput" type='text' onChange={(event) => setSiteContact(event.target.value)} placeholder='Site Contact Person' />
        </div>
        
        <br></br>

        
        <br></br>
        <hr></hr>
        <br></br>

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

        <div className='consent'>
            <input type='checkbox' onChange={()=> handleCheckBox()}></input>
            <p> I, <b>{printName}</b> ,authorize TTF SCAFFOLDING INC to charge the above credit card. If there is a specific invoices or amount, please list it below.</p>
        </div>
       

        
        <button className='btnSubmit' onClick={()=> handleSave()}> Submit </button>
        
       
    </div>
  )
}

export default Form3