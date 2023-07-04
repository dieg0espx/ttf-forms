import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { app } from '../Firebase';


function SheetCardAuthorization() {
  const db = getFirestore(app);

  const [creditApplications, setCreditApplications] = useState([]);
  const [dataIndex, setDataIndex] = useState(null);

  useEffect(()=>{
    setDataIndex(window.location.href.split('=')[1]);
    fetchDocs();
  })
  async function fetchDocs(){
    const q = query(collection(db, "form3"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const applications = querySnapshot.docs.map((doc) => doc.data());
      setCreditApplications(applications);
    });
  }
  let imagesLoaded = 0;
  function imageLoaded(){ 
    imagesLoaded ++;
    console.log(imagesLoaded);
    if(imagesLoaded == 1){
      window.print();
    }
  }


  return (
    <div className='wrapper-sheet'>
      {creditApplications.map((application, i) => (
          i === dataIndex-1 && (
      <div className='sheet'>
        <div className='sheet-header'>
          <img src='https://ttfscaffolding.com/wp-content/uploads/2022/11/logo-1.png'></img>
          <h1> Credit Card Authorization </h1>
          <div>
            <p> 778-898-5301 </p>
            <p> info@ttfscaffolding.com </p>
            <p> 10979 Olsen Rd.</p>
            <p> Surrey, BC, V3V 3S9 </p>
          </div>
        </div>

        <br></br><br></br>
        <div className='field'>
            <h2> Company Name: </h2>
            <p> {application.companyName} </p>
        </div>
        <div className='field'>
            <h2> Mailing Address: </h2>
            <p> {application.mailingAddress} </p>
        </div>
        <div className='tree-col'>
          <div className='field'>
              <h2> City: </h2>
              <p> {application.city} </p>
          </div>
          <div className='field'>
              <h2> Province: </h2>
              <p> {application.province} </p>
          </div>
          <div className='field'>
              <h2> Postal Code: </h2>
              <p> {application.postalCode} </p>
          </div>
        </div>
        
        <div className='two-col'>
          <div className='field'>
              <h2> Telephone No: </h2>
              <p> {application.customerName} </p>
          </div>
          <div className='field'>
              <h2> Fax No: </h2>
              <p> {application.customerName} </p>
          </div>
        </div>

        <div className='field'>
            <h2> Email: </h2>
            <p> {application.email} </p>
        </div>
        <div className='field'>
            <h2> Jobsite Address: </h2>
            <p> {application.jobsiteAddress} </p>
        </div>

        <div className='field'>
            <h2> Site Contact Person: </h2>
            <p> {application.siteContact} </p>
        </div>

        <div className='field'>
            <h2> Name on Credit Card: </h2>
            <p> {application.nameOnCard} </p>
        </div>
        <div className='field'>
            <h2> Credit Card No: </h2>
            <p> {application.numOnCard} </p>
        </div>
        
        <div className='two-col'>
            <div className='field'>
                <h2> Expiry Date: </h2>
                <p> {application.expirationOnCard} </p>
            </div>
            <div className='field'>
                <h2> CVC Code: </h2>
                <p> {application.codeOnCard} </p>
            </div>
        </div>
      
        <p className='sheet3-consent'> I, <b>{application.printName}</b>, authorize TTF SCAFFOLDING INC to charge the above credit card. If there is a specific invoices or amount, please list it below. </p>

   
        <div className='two-col' id='signatory-area'>
            <div className='field'>
                <h2> Signatory: </h2>
                <img id="sheet3-sign" src={application.sign} onLoad={()=> imageLoaded()}></img>
            </div>
            <div className='field'>
                <h2> Print Name: </h2>
                <p> {application.printName} </p>
            </div>
        </div>
        <div className='two-col'>
            <div className='field'>
                <h2> Date: </h2>
                <p> {application.date} </p>
            </div>
            <div className='field'>
                <h2> Position: </h2>
                <p> {application.position} </p>
            </div>
        </div>
      </div>  
      )
      ))}
    </div>
  )
}

export default SheetCardAuthorization
