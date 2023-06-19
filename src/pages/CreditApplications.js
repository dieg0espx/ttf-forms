import React, { useEffect, useState, useRef } from 'react';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { app } from '../Firebase';


function CreditApplications() {

  const db = getFirestore(app);

  const [creditApplications, setCreditApplications] = useState([]);
  const [dataIndex, setDataIndex] = useState(null);
  const [sheetURL, setSheetURL] = useState("");

  async function printDocs(){
    const q = query(collection(db, "form1"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const applications = querySnapshot.docs.map((doc) => doc.data());
      console.log(doc.data());
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

  return (
    <div className="App">
    <div className='header'>
         <img src='https://ttfscaffolding.com/wp-content/uploads/2022/11/logo-1.png'></img>
     </div>
     <div className='grid' style={{display: dataIndex ? "grid":"block"}}>
       <div className='applications'>
          <div className='navigation-bar'>
            <button className='selected'> Credit Applications </button>
            <button onClick={()=> window.location ='/creditRequest'}> Credit Requests </button>
            <button onClick={()=> window.location ='/creditCardAuthorization'}> Credit Card Authorizations </button>
          </div>
         <div className='wrapper-applications'> 
         <table className='table-applications'>
         <tr>
            <th>Company Name</th>
            <th>Type of Business</th>
            <th>Owner 1</th>
            <th>Owner 2</th>
          </tr>
           {creditApplications.map((application, i) =>(
            <tr key={i} onClick={()=> setDataIndex(i + 1)}>
              <td> {application.legalNameOfBusiness}  </td>
              <td> {application.typeOfBusiness}  </td>
              <td> {application.owner1Name}  </td>
              <td> {application.owner2Name}  </td>
            </tr>
           ))}
          </table>
         </div>
       </div>
       <div className='applications-data' style={{display: dataIndex ? "block":"none"}}>
         {creditApplications.map((application, i) => (
           i === dataIndex-1 && (
           <div>
           <div className='data'>
             <button className="btnHide" onClick={()=>setDataIndex(null)}> <i className="bi bi-chevron-compact-left"></i> Close </button>
             <h1> {application.legalNameOfBusiness}</h1>
             <p className='label'>  Customer and Related Information </p>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Type of Business: </h2>
               <p> {application.typeOfBusiness}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Legal Name of Business: </h2>
               <p> {application.legalNameOfBusiness}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Business Registration #: </h2>
               <p> {application.businessRegistrationNo}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Business Street Address: </h2>
               <p> {application.businessStreetAddress}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Date Business Started: </h2>
               <p> {application.dateBusinessStarted}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Number of employees: </h2>
               <p> {application.noEmployees}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> AP Phone: </h2>
               <p> {application.apPhone}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> AP Email: </h2>
               <p> {application.apEmail}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Bank Nam: </h2>
               <p> {application.bankName}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Bank Branch Address: </h2>
               <p> {application.bankBranchAddress}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Line of credit / Loan Amount: </h2>
               <p> ${application.lineOfCredit}</p>
             </div>
             
             <p className='label'>  #1 Owner / Share holder / Partner Information </p>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Full Name: </h2>
               <p> {application.owner1Name}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> % of Customer Entity: </h2>
               <p> {application.owner1Percentage}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Email: </h2>
               <p> {application.owner1Email}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Phone: </h2>
               <p> {application.owner1Phone}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Address: </h2>
               <p> {application.owner1Address}</p>
             </div>
             
             <div style={{display: application.owner2Name !== "" ? "block" : "none" }}>
               <p className='label'>  #2 Owner / Share holder / Partner Information </p>
               <div className='data-element'>
                 <h2> <i className="bi bi-caret-right-fill"></i> Full Name: </h2>
                 <p> {application.owner2Name}</p>
               </div>
               <div className='data-element'>
                 <h2> <i className="bi bi-caret-right-fill"></i> % of Customer Entity: </h2>
                 <p> {application.owner2Percentage}</p>
               </div>
               <div className='data-element'>
                 <h2> <i className="bi bi-caret-right-fill"></i> Email: </h2>
                 <p> {application.owner2Email}</p>
               </div>
               <div className='data-element'>
                 <h2> <i className="bi bi-caret-right-fill"></i> Phone: </h2>
                 <p> {application.owner2Phone}</p>
               </div>
               <div className='data-element'>
                 <h2> <i className="bi bi-caret-right-fill"></i> Address: </h2>
                 <p> {application.owner2Address}</p>
               </div>
             </div>
             <p className='label'>  Business References </p>

             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Name: </h2>
               <p> {application.reference1Name}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Email: </h2>
               <p> {application.reference1Email}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Phone: </h2>
               <p> {application.reference1Phone}</p>
             </div>
             <hr className='references-divider'></hr>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Name: </h2>
               <p> {application.reference2Name}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Email: </h2>
               <p> {application.reference2Email}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Phone: </h2>
               <p> {application.reference2Phone}</p>
             </div>
             <hr className='references-divider'></hr>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Name: </h2>
               <p> {application.reference3Name}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Email: </h2>
               <p> {application.reference3Email}</p>
             </div>
             <div className='data-element'>
               <h2> <i className="bi bi-caret-right-fill"></i> Phone: </h2>
               <p> {application.reference3Phone}</p>
             </div>
           </div>
           <br></br>
           <button className='btn-printApplication' onClick={()=>printSheet('/sheet/?id=' + dataIndex)}> <i className="bi bi-printer-fill"></i> Print Application </button>
           </div>
           )
         ))}
           <iframe ref={iframeRef} src={sheetURL} title="TTF - creditApplication"></iframe>
       </div>
     </div>
 </div>
  )
}

export default CreditApplications
