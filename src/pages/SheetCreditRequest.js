import React, {useEffect, useState} from 'react'
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { app } from '../Firebase';

function SheetCreditRequest() {
    const db = getFirestore(app);

    const [creditRequests, setCreditRequests] = useState([]);
    const [dataIndex, setDataIndex] = useState(null);
    
    useEffect(()=>{
        setDataIndex(window.location.href.split('=')[1]);
        fetchDocs();
    })
    async function fetchDocs(){
      const q = query(collection(db, "form2"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const applications = querySnapshot.docs.map((doc) => doc.data());
        setCreditRequests(applications);
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
      {creditRequests.map((application, i) => (
          i === dataIndex-1 && (
      <div className='sheet'>
        <div className='sheet-header'>
          <img src='https://ttfscaffolding.com/wp-content/uploads/2022/11/logo-1.png'></img>
          <h1> Credit Request </h1>
          <div>
            <p> 778-898-5301 </p>
            <p> info@ttfscaffolding.com </p>
            <p> 10979 Olsen Rd.</p>
            <p> Surrey, BC, V3V 3S9 </p>
          </div>
        </div>

        <br></br><br></br>
        <div className='field'>
            <h2> Supplier Name: </h2>
            <p> {application.supplierName} </p>
        </div>

        <div className='two-col'>
            <div className='field'>
                <h2> Contact Name: </h2>
                <p> {application.contactName} </p>
            </div>
            <div className='field'>
                <h2> Phone No: </h2>
                <p> {application.phoneNo} </p>
            </div>
        </div>
        <div className='two-col'>
            <div className='field'>
                <h2> Email Address: </h2>
                <p> {application.emailAddress} </p>
            </div>
            <div className='field'>
                <h2> Fax No: </h2>
                <p> {application.faxNo} </p>
            </div>
        </div>
        <br></br>
        <div className='field'>
            <h2> Customer Name: </h2>
            <p> {application.customerName} </p>
        </div>

        <h2 id="sheet2-subtitle"> Customer Credit Details </h2>
        
        <div className='field'>
            <h2> How long has this customer had an account with your copmpany: </h2>
            <p> {application.timeWithAccount} </p>
        </div>

        <div className='field'>
            <h2> What are the terms of repayment: </h2>
            <p> {application.termsOfRepayment} </p>
        </div>
        <div className='field'>
            <h2> Approved Credit Limit: </h2>
            <p> {application.approvedCredit} </p>
        </div>
        <div className='two-col'>
            <div className='field'>
                <h2> Current Balance: </h2>
                <p> {application.currentBalance} </p>
            </div>
            <div className='field'>
                <h2> Past Due Balance: </h2>
                <p> {application.pastDueBalance} </p>
            </div>
        </div>
        <div className='field'>
            <h2> Date of Last Purchase: </h2>
            <p> {application.dateOfPurchase} </p>
        </div>
        <br></br>
        <div className='field'>
            <h2> What is the typical repayment history for this customer: </h2>
            <p> {application.repaymentHistory} </p>
        </div>
        <div className='field'>
            <h2> What is the frecuency of late payment of this customer: </h2>
            <p> {application.frecuencyLatePayment} </p>
        </div>
        <div className='field'>
            <h2> How would you describe this company as customer: </h2>
            <p> {application.customerQualification} </p>
        </div>
        <br></br>
        <h2 id="sheet2-subtitle"> Additional Comments </h2>
        <p id="additionalComments"> {application.additionalComments} </p>

        <br></br>
        <div className='two-col' id='signatory-area'>
            <div className='field'>
                <h2> Signatory: </h2>
                <img id="sheet2-sign" src={application.sign} onLoad={()=> imageLoaded()}></img>
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
     )))}
    </div>
  )
}

export default SheetCreditRequest
