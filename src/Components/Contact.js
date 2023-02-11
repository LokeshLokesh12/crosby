import React,{Fragment} from 'react'
import Header from './Header'
import Footer from './Footer'
import Form from './Form'
function Contact() {
  let handle =(e)=>{
    let formcontainer = document.getElementById('formContainer')
    console.log(formcontainer)
    formcontainer.style.display = 'flex';

  }
  return (
   <Fragment>
        <Header/>
        <Form/>
        <div className="contact">
            <h1>contact us</h1>
            <p>The following text is placeholder known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet nullam.</p>
            <button onClick={handle}>get in touch</button>
        </div>
        <Footer/>
   </Fragment>
  )
}

export default Contact