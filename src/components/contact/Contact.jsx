import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "011170bd-ba37-4531-ab7b-acdcff09b8f9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();

    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Our "Contact Us" page is your gateway to connecting with us easily and efficiently. 
                Whether you have questions, need support, we’re here to help. 
                Reach out through our provided email, phone number, We value your inquiries and are committed to ensuring a smooth and helpful experience. Let’s stay connected!</p>
                 <ul>
                    <li><img src={mail_icon} alt="" />Contact@suresh21.dev</li>
                    <li><img src={phone_icon} alt="" />+91 562-763-9897</li>
                    <li><img src={location_icon} alt="" />#24 Massachusttes Ave, Combridge MA 02139, United States</li>
                 </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="number" name="phone" placeholder='Enter your mobile' required />
                <label>Write your message here</label>
                <textarea name="message"   rows={6} placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact