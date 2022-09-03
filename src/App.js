/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//THINGS TO DO:
//
//1. REMEMBER TO ADD ERROR TRAPPING
//2. ADD SECURITY
//3. ADD UPDATE/PUT OPERATION
//4. ADD DELETE OPERATION
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////



import React, { useState } from 'react';

let objPerson = {
       ID: '',
       firstName: '',
       lastName: '',
       street: '',  
       city: '',
       state: '',
       zipCode: '',
       country: '',   
}


const App = () => {

//REGISTER -- post
       const [regPersonInfo, setPerson] = useState({
              objPerson
       })

//GETBYID -- get 
       const [resPersonInfo, setRes] = useState({
              objPerson 
       })

       console.log(objPerson)



// SUBMITION 
    const onButtonSubmit = () => {
              const rdRegister = document.getElementById('rd1')
              const rdGetByID = document.getElementById('rd2')

              handleStateChange
              
       // REGISTER PERSON IF CHECKED             
              if (rdRegister.checked == true) {
                     console.log('MADE IT TO (( REGISTER )) FETCH STATEMENT')

                     //   "CORS ANYWHERE"
                     //   MAKe MY OWN PROXY SERVER THROUGH WHICH TO PASS MY FETCH AND AVOID CORS PROBLEMS
                     //
                     //1. RUN THE FOLLOWING COMMANDS
                     // 
                     // git clone https://github.com/Rob--W/cors-anywhere.git
                     // cd cors-anywhere/
                     // npm install
                     // heroku create
                     // git push heroku master
                     //
                     //2. NEXT, prefix my request URL with the URL for my proxy
                     //   ex. https://cryptic-headland-94862.herokuapp.com/https://person-resource-api.herokuapp.com//register


                     fetch('https://cryptic-headland-94862.herokuapp.com/https://person-resource-api.herokuapp.com//register', {         
                            method: 'POST', 
                            headers: {'Content-Type': 'application/json'}, 
                            body: JSON.stringify( regPersonInfo ),
                            //mode: 'no-cors'
                     })
                     .then(res => res.json())
                     .then(data => console.log(data))
                     .catch(err => console.log('response error status --> ' + res.status + res.statusText))    
              }

       // ...GET BY ID 
              else if (rdGetByID.checked == true) {

                     fetch('https://person-resource-api.herokuapp.com/' + regPersonInfo.ID) 
                     .then(res => res.json())
                     .then(data => {
                            let retrievePerson = data[0];
                            setRes({
                                   firstName: retrievePerson.first_name,
                                   lastName: retrievePerson.last_name,
                                   street: retrievePerson.street,
                                   city: retrievePerson.city,
                                   state: retrievePerson.state,
                                   zipCode: retrievePerson.zip_code,
                                   country: retrievePerson.country
                            })
                            console.log(data[0]);
                     }) 
                     
                     
              }
    }
                          

// HANDLE STATE
     const handleStateChange = (event) => {
              let value = event.target.value;
              let name = event.target.name;

              setPerson((prevalue) => {    
                     return {
                            ...prevalue,            
                            [name]: value
                     }
              })
     }



// RETURN THE VALUE\RENDER
       return (<main className="mv4 mw6 center">
             
       {/* BEGIN FORM */}
             <form id="Register">
                 <legend className="f4 fw6">Persons Resource</legend>

       {/* RADIO */}
                   <br />Type of Action<br />
                       <input type="radio" id='rd1' name="VerbMethod" value="Register" />Register<br />
                       <input type="radio" id='rd2' name="VerbMethod" value="GetByID"/> Get By ID<br /> 
                   <br />
                
       {/* ID */}
                   <label className="db">ID</label>
                   <input type='text' 
                          name='ID'
                          onChange={handleStateChange}
                          className="bg-transparent" 
                   /> 
                   <span style={{ color: 'red' }}>{resPersonInfo.ID}</span>    

       {/* FIRST NAME */}
                   <label className="db">First Name</label>
                   <input type='text' 
                          name='firstName'  
                          onChange={handleStateChange}  
                   /> 
                   <span style={{ color: 'red' }}>{resPersonInfo.firstName}</span>
                     
       {/* LAST NAME */}
                   <label className="db">Last Name</label>
                   <input type='text' 
                          name='lastName' 
                          onChange={handleStateChange}  
                   /> 
                   <span style={{ color: 'red' }}>{resPersonInfo.lastName}</span>
                     
       {/* STREET */}
                   <label className="db">Street</label>
                   <input  type='text'
                           name='street'  
                           onChange={handleStateChange}  
                   /> 
                   <span style={{ color: 'red' }}>{resPersonInfo.street}</span>
                
       {/* CITY */}
                   <label className="db">City</label>
                   <input type='text'
                          name='city'   
                          onChange={handleStateChange} 
                   /> 
                   <span style={{ color: 'red' }}>{resPersonInfo.city}</span>
              
       {/* STATE */}
                   <label className="db">State</label>
                   <input type='text' 
                          name='state'  
                          onChange={handleStateChange}  
                   /> 
                   <span style={{ color: 'red' }}>{resPersonInfo.state}</span>

       {/* ZIP CODE */}
                   <label className="db">Zip Code</label>
                   <input type='text' 
                          name='zipCode'  
                          onChange={handleStateChange}  
                   /> 
                   <span style={{ color: 'red' }}>{resPersonInfo.zipCode}</span>

       {/* COUNTRY */}
                   <label className="db">Country</label>
                   <input type='text' 
                          name='country' 
                          onChange={handleStateChange}  
                   />
                   <span style={{ color: 'red' }}>{resPersonInfo.country}</span>
                   
             </form>

             <br></br>
             <br></br>


       {/* SUBMIT BUTTON */}
            <input  
              type="submit" 
              value="Submit Info" 
              onChange={handleStateChange} 
              onClick={onButtonSubmit}
            />
         </main>)
   } 


export default App