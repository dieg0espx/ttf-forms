import {React, useState, useEffect} from 'react'

function NewDestinatary() {
    const [selectedForm, setSelectedForm] = useState('');
    const [destinataryEmail, setDestinataryEmai] = useState('');

    const handleSelectChange = (event) => {
        setSelectedForm(event.target.value);
      };

    function sendEmail(){
       //sending Email  
       console.log("Sending Email ...");
       var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
       
       var urlencoded = new URLSearchParams();
       urlencoded.append("email",destinataryEmail);
       urlencoded.append("formTitle", selectedForm);
      
       
       var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: urlencoded,
         redirect: 'follow'
       };
       
       fetch("https://mailer-forms.vercel.app/newDestinatary", requestOptions)
         .then(response => response.text())
         .then(result => console.log("Email Sent: " + result))
         .catch(error => console.log('== ERROR === ', error));
    }

    const handleInputChange = (event) => {
        setDestinataryEmai(event.target.value);
      };

  return (
    <div className='newDestinatary'>
         <select value={selectedForm} onChange={handleSelectChange}>
             <option value=""> = Select a Form = </option>
             <option value="creditApplication"> New Credit Application</option>
             <option value="creditRequest"> New Credit Request</option>
             <option value="creditCardAuthorization"> New Credit Card Authorization </option>
         </select>
         <input type='email' placeholder='example@mail.com' onChange={handleInputChange}></input>
         <button onClick={()=> sendEmail()}> Send </button>
    </div>
  )
}

export default NewDestinatary
