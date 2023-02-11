import React,{Fragment,useRef} from 'react'
import emailjs from '@emailjs/browser';
// import 'bootstrap/dist/css/bootstrap.css'
import Popup from './Popup';
function Form() {
    const form = useRef();
    let closeevent = ()=>{
      let formcontainer = document.getElementById('formContainer');
      let form_info = document.getElementById('contact')
      form_info.reset();   
      formcontainer.style.display = 'none';

    }
    const sendEmail = (e) => {
      e.preventDefault();
      let formcontainer = document.getElementById('formContainer')
      let email = document.getElementById('inputMail')

      if(email.value.match('gmail.com')){
        emailjs.sendForm(
        'service_s06ptga',
         'template_2cue4b4',
          form.current,
          'E8Fx3XiyOydkpun23')
        .then((result) => {
            console.log(result.text);
            if (result.status === 200) {
              // alert("mail sent successfully")
              let toastelement = document.getElementById('popup')
              let toast = new window.bootstrap.Toast(toastelement)

              toast.show();
              formcontainer.style.display = 'none';
            }
            else{
              alert("somewhere went wrong")
            }
        }, (error) => {
            console.log(error.text);
        });
        
        // let toastelement = document.getElementById('popup')
        // let toast = new window.bootstrap.Toast(toastelement)
        // toast.show();
      }
      else{   
        email.classList.add("invalid_input")
          setTimeout(()=>{
            email.classList.remove("invalid_input")
          },300)
        }
      
    };
  return (
    <Fragment>
        <Popup message="mail sent successfully" />
        <div className="form" id='formContainer'>
            <form className="row g-3 form-content" name="contact" id='contact' ref={form} onSubmit={sendEmail}>
              <div className="d-flex close">
              <h1>Contact Us</h1>
              <i class="fa fa-2x fa-times" id='fa-times' onClick={closeevent} aria-hidden="true"></i>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Name *</label>
                <input type="text" name="first name" className="form-control" id="inputEmail4" required/>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label"> Last name</label> 
                <input type="text" name="last name" className="form-control" id="inputPassword4"/>
              </div>  
              <div className="col-12">
                <label htmlFor="inputMail" className="form-label">Email * </label>
                <input type="text" name="email" className="form-control" id="inputMail" required/>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Message * </label>
                <textarea style={{minHeight:"100px"}} name="message" className="form-control" id="inputAddress"  required/>
              </div>           
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" name="city" className="form-control" id="inputCity" required/>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <input type="text" name="state" className="form-control" id="inputstate" required/>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" name="postal code" className="form-control" id="inputZip" required />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark">Get In Touch</button>
              </div>
            </form>
        </div>
    </Fragment>
  )
}

export default Form