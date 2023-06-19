import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { app } from '../Firebase';


function Sheet() {
  const db = getFirestore(app);

  const [creditApplications, setCreditApplications] = useState([]);
  const [dataIndex, setDataIndex] = useState(null);
  
  useEffect(()=>{
    setDataIndex(window.location.href.split('=')[1]);
  },[])


  async function printDocs(){
    const q = query(collection(db, "form1"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const applications = querySnapshot.docs.map((doc) => doc.data());
      console.log(applications);
      setCreditApplications(applications);
    });
  }


  useEffect(()=>{
    printDocs();
  },[])


  useEffect(() => {
    const handlePrint = () => {
      window.print();
    };

    if (creditApplications.length > 0) {
      handlePrint();
    }
  }, [creditApplications]);
  
  return (
    <div className='wrapper-sheet'>
      {creditApplications.map((application, i) => (
          i === dataIndex-1 && (
      <div className='sheet'>
        <div className='sheet-header'>
          <img src='https://ttfscaffolding.com/wp-content/uploads/2022/11/logo-1.png'></img>
          <h1> Application For Credit </h1>
          <div>
            <p> 778-898-5301 </p>
            <p> info@ttfscaffolding.com </p>
            <p> 10979 Olsen Rd.</p>
            <p> Surrey, BC, V3V 3S9 </p>
          </div>
        </div>
        <p id="sheet-introduction"> The applicant (the “Customer”) hereby applying for credit to be extended to it by TTF Scaffolding Inc. (“TTF”) agrees to provide, on request, such further and other documents and information, including but not limited to financial statements and/or net worth statements, to TTF prior to credit being approved or extended. The Customer agrees that TTF is under no obligation to accept this application or to extend credit to the Customer. The Customer further agrees that if this application is accepted, TTF may refuse to extend credit, may increase the amount of credit, or may reduce the amount of credit previously extended, at any time without providing reasons for such refusal, increase, or reduction. If two or more principals, partners, companies or other legal entities are listed on this application, then the obligations and liabilities of such principals, partners, companies or other legal entities to TTF shall be joint and several. The terms and conditions of rental will be as specified in Terms and Conditions of TTF as provided to the Customer at the time of the application for credit, and as available at [www.ttfscaffolding.com]. </p>
        <h2> Customer and related information: </h2>

        <div id="grid1">
          <div id="type-of-business-grid">
            <h3> Type of Business :</h3>
            <p> <i className={application.typeOfBusiness == "Sole Propietor" ? "bi bi-check-circle":"bi bi-circle"}></i> Sole Propietor </p>
            <p> <i className={application.typeOfBusiness == "Incorporated Company" ? "bi bi-check-circle":"bi bi-circle"}></i> Incorporated Company </p>
            <p> <i className={application.typeOfBusiness == "Partnership" ? "bi bi-check-circle":"bi bi-circle"}></i> Partnership </p>
          </div>
          <div className='block-right'>
            <div id="legalNameOfBusiness">
              <h3> Legal Name of Business: </h3>
              <p> {application.legalNameOfBusiness} </p>
            </div>
            <div id="businessRegistrationNumber">
              <h3> Business registration #: (incorporation #, sole proprietor # / partnership registration #) </h3>
              <p> {application.businessRegistrationNo} </p>
            </div>
          </div>
        </div>

        <div id="grid2">
          <div id="businessAddress">
            <h3> Business Street Address</h3>
            <p> {application.businessStreetAddress}</p>
          </div>
          <div>
            <div className='block'>
              <h3> Date business Started: </h3>
              <p> {application.dateBusinessStarted}</p>
            </div>
            <div className='block'>
              <h3> Number of Employees: </h3>
              <p> {application.noEmployees} </p>
            </div>
            <div className='block'>
              <h3> AP Phone: </h3>
              <p> {application.apPhone} </p>
            </div>
            <div className='block noBottomBorder'>
              <h3> AP Email Address: </h3>
              <p> {application.apEmail} </p>
            </div>
          </div>
        </div>

        <div id="grid3">
          <div>
            <div className='block'>
              <h3> Bank Name: </h3>
              <p> {application.bankName}</p>
            </div>
            <div className='block noBottomBorder'>
              <h3> Line of Credit / Loan Amount: </h3>
              <p> {application.lineOfCredit} </p>
            </div>
          </div>
          <div id="bankAddress">
            <h3> Bank Branch Address : </h3>
            <p> {application.bankBranchAddress} </p>
          </div>
        </div>

        <div id='grid4'>
          <div id="owner1">
            <h3 className='notInline'> #1 Owner / shareholder / partner information: </h3>
            <h3> Name: </h3>
            <p> {application.owner1Name} </p> <br></br>
            <h3> % Ownership of Customer entity: </h3>
            <p> {application.owner1Percentage} </p><br></br>
            <h3> Email: </h3>
            <p> {application.owner1Email} </p><br></br>
            <h3> Phone: </h3>
            <p> {application.owner1Phone} </p><br></br>
            <h3> Home Address: </h3>
            <p> {application.owner1Address} </p>
          </div>
          <div id="owner2">
            <h3 className='notInline'> #2 Owner / shareholder / partner information: </h3>
            <h3> Name: </h3>
            <p> {application.owner2Name} </p> <br></br>
            <h3> % Ownership of Customer entity: </h3>
            <p> {application.owner2Percentage} </p><br></br>
            <h3> Email: </h3>
            <p> {application.owner2Email} </p><br></br>
            <h3> Phone: </h3>
            <p> {application.owner2Phone} </p><br></br>
            <h3> Home Address: </h3>
            <p> {application.owner2Address} </p>
          </div>
          
        </div>

        <p id="sheet-introduction"> The Customer hereby certifies that the above information is true and correct in all respects and agrees to notify TTF of any change that may affect the terms and conditions hereof, including, without limitation, any change in ownership or any material change in the Customer’s business. The Customer acknowledges that TTF is relying, and has relied, on the information set out herein agreeing to grant credit to the Customer. The authorized signatory(ies) signing below certify that they have the authority to bind the Customer to the terms contained herein and in the Terms and Conditions. This Application may be executed and delivered by electronic transmission. </p>
      
        <h2> Business References (3 Required): </h2>
        <div className='reference'>
          <p className='bold'> 1.- </p>
          <p className='bold'> Name: </p>
          <p> {application.reference1Name}</p>
          <p className='bold'> Phone: </p>
          <p> {application.reference1Phone} </p>
          <p className='bold'> Email: </p>
          <p> {application.reference1Email} </p>
        </div>
        <div className='reference'>
          <p className='bold'> 2.- </p>
          <p className='bold'> Name: </p>
          <p> {application.reference2Name}</p>
          <p className='bold'> Phone: </p>
          <p> {application.reference2Phone} </p>
          <p className='bold'> Email: </p>
          <p> {application.reference2Email} </p>
        </div>
        <div className='reference'>
          <p className='bold'> 3.- </p>
          <p className='bold'> Name: </p>
          <p> {application.reference3Name}</p>
          <p className='bold'> Phone: </p>
          <p> {application.reference3Phone} </p>
          <p className='bold'> Email: </p>
          <p> {application.reference3Email} </p>
        </div>


        <div id='grid5'>
          <div>
            <img src={application.signatory1Sign}></img>
            <p> {application.signatory1Name}</p>
            <p> {application.signatory1Date}</p>
          </div>
          <div>
            <img src={application.signatory2Sign}></img>
            <p> {application.signatory2Name}</p>
            <p> {application.signatory2Date}</p>
          </div>
        </div>
      </div>  
      )
      ))}
    </div>
  )
}

export default Sheet
