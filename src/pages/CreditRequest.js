import React, { useEffect, useState, useRef } from 'react';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { app } from '../Firebase';


function CreditRequest() {

  const db = getFirestore(app);

  const [creditRequests, setCreditRequests] = useState([]);
  const [dataIndex, setDataIndex] = useState(null);
  const [sheetURL, setSheetURL] = useState("");

  async function printDocs(){
    const q = query(collection(db, "form2"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const q = query(collection(db, "form2"));
      const applications = querySnapshot.docs.map((doc) => doc.data());
      const sortedApplications = applications.sort((a, b) => a.date - b.date);

      console.log(sortedApplications);
      setCreditRequests(sortedApplications);
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

  return (
    <div className="App">
    <div className='header'>
         <img src='https://ttfscaffolding.com/wp-content/uploads/2022/11/logo-1.png'></img>
     </div>
     <div className='grid' style={{display: dataIndex ? "grid":"block"}}>
       <div className='applications'>
          <div className='navigation-bar'>
            <button onClick={()=> window.location ='/creditApplication'}> Credit Applications </button>
            <button className='selected'> Credit Requests </button>
            <button onClick={()=> window.location ='/creditCardAuthorization'}> Credit Card Authorizations </button>
          </div>
         <div className='wrapper-applications'> 
         <table className='table-applications'>
         <tr>
            <th> Supplier Name </th>
            <th> Customer Name </th>
            <th> Contact Name </th>
            <th> Qualification </th>
          </tr>
           {creditRequests.map((application, i) =>(
            <tr key={i} onClick={()=> setDataIndex(i + 1)}>
              <td> {application.supplierName}  </td>
              <td> {application.customerName}  </td>
              <td> {application.contactName}  </td>
              <td> {application.customerQualification}  </td>
            </tr>
           ))}
          </table>
         </div>
       </div>
       <div className='applications-data' style={{display: dataIndex ? "block":"none"}}>
         {creditRequests.map((application, i) => (
           i === dataIndex-1 && (
           <div>
           <div className='data'>
             <button className="btnHide" onClick={()=>setDataIndex(null)}> <i className="bi bi-chevron-compact-left"></i> Close </button>
             <h1> {application.supplierName}</h1>
             <p className='label'>  Customer Information </p>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Contact Name: </h2>
               <p> {application.contactName}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Phone No: </h2>
               <p> {application.phoneNo}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Email Address: </h2>
               <p> {application.emailAddress}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Fax No: </h2>
               <p> {application.faxNo}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Customer Name: </h2>
               <p> {application.customerName}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Time with Account: </h2>
               <p> {application.timeWithAccount}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Terms of Re-payment: </h2>
               <p> {application.termsOfRepayment}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Credit Limit: </h2>
               <p> {application.approvedCredit}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Current Balance: </h2>
               <p> {application.currentBalance}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Past Due Balance: </h2>
               <p> {application.pastDueBalance}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Date of Last Purchase: </h2>
               <p> ${application.dateOfPurchase}</p>
             </div>
             
             
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Typical Re-Payment History: </h2>
               <p> {application.repaymentHistory}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Frecuency of Late Payments: </h2>
               <p> {application.frecuencyLatePayment}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Customer Qualification: </h2>
               <p> {application.customerQualification}</p>
             </div>
             {/* <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Additional Comments: </h2>
               <p> {application.additionalComments}</p>
             </div> */}
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Print Name: </h2>
               <p> {application.printName}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Position: </h2>
               <p> {application.printName}</p>
             </div>
             
             
           </div>
           <button className='btn-printApplication' onClick={()=>printSheet('/sheetCreditRequest/?id=' + dataIndex)}> <i className="bi bi-printer-fill"></i> Print Application </button>
           </div>
           )
         ))}
           <iframe ref={iframeRef} src={sheetURL} title="TTF - creditApplication"></iframe>
       </div>
     </div>
 </div>
  )
}

export default CreditRequest
