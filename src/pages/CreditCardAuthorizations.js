import React, { useEffect, useState, useRef } from 'react';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { app } from '../Firebase';
import NewDestinatary from '../components/NewDestinatary';


function CreditCardAuthorizations() {

  const db = getFirestore(app);

  const [creditApplications, setCreditApplications] = useState([]);
  const [dataIndex, setDataIndex] = useState(null);
  const [sheetURL, setSheetURL] = useState("");

  async function printDocs(){
    const q = query(collection(db, "form3"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const applications = querySnapshot.docs.map((doc) => doc.data());
      setCreditApplications(applications);
    });
  }

  useEffect(()=>{
    printDocs();
  },[])

  const iframeRef = useRef(null);
  function printSheet(url){
    if(url == sheetURL){
      iframeRef.current.contentWindow.location.reload();
    } else {
      setSheetURL(url);
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

  return (
    <div className="App">
    <div className='header'>
         <img src='https://ttfscaffolding.com/wp-content/uploads/2022/11/logo-1.png'></img>
         <NewDestinatary />
     </div>
     <div className='grid' style={{display: dataIndex ? "grid":"block"}}>
       <div className='applications'>
          <div className='navigation-bar'>
            <button onClick={()=> window.location ='/creditForms/#/creditApplication'}> Credit Applications </button>
            <button onClick={()=> window.location ='/creditForms/#/creditRequest'}> Credit Requests </button>
            <button className='selected'> Credit Card Authorizations </button>
          </div>
         <div className='wrapper-applications'> 
         <table className='table-applications'>
         <tr>
            <th>Company Name</th>
            <th>Full Name</th>
            <th>Phone </th>
            <th>Email</th>
          </tr>
           {creditApplications.map((application, i) =>(
            <tr key={i} onClick={()=> setDataIndex(i + 1)}>
              <td> {application.companyName}  </td>
              <td> {application.printName}  </td>
              <td> {application.phone}  </td>
              <td> {application.email}  </td>
            </tr>
           ))}
          </table>
         </div>
       </div>
       <div id="data-cardAuthorization" className='applications-data' style={{display: dataIndex ? "block":"none"}}>
         {creditApplications.map((application, i) => (
           i === dataIndex-1 && ( 
           <div>
           <div className='data'>
             <button className="btnHide" onClick={()=>setDataIndex(null)}> <i className="bi bi-chevron-compact-left"></i> Close </button>
             <h1> {application.companyName}</h1>
             <div className='card-form'> 
                <div className='card-details'>
                    <p id="providerOnCard"> {detectCardType(application.numOnCard)}</p>
                    <p id="nameOnCard"> {application.nameOnCard} </p>
                    <p id="numOnCard"> {addExtraSpace(application.numOnCard)} </p>
                    <div className='two-col'>
                        <p id="expOnCard"> {application.expirationOnCard.length > 0 ? "EXP: " + application.expirationOnCard: ""} </p>
                        <p id="cvcOnCard"> {application.codeOnCard.length > 0 ? "CVC: " + convertToBullets(application.codeOnCard): ""} </p>
                    </div>
                </div>
              </div>
              <br></br>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Jobsite Address: </h2>
               <p> {application.jobsiteAddress}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Site Contact: </h2>
               <p> {application.siteContact}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Full Name: </h2>
               <p> {application.printName}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Position: </h2>
               <p> {application.position}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Name on Card: </h2>
               <p> {application.nameOnCard}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Mailing Address: </h2>
               <p> {application.mailingAddress}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> City: </h2>
               <p> {application.city}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Province: </h2>
               <p> {application.province}</p>
             </div>
            </div>
           <button className='btn-printApplication' onClick={()=>printSheet('/creditForms/#/sheetCardAuthorization?id=' + dataIndex)}> <i className="bi bi-printer-fill"></i> Print Application </button>
           </div>
           )
         ))}
           <iframe ref={iframeRef} src={sheetURL} title="TTF - creditApplication"></iframe>
       </div>
     </div>
 </div>
  )
}

export default CreditCardAuthorizations
