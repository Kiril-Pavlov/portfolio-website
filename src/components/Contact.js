import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import "./Contact.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9avkhj7', 'template_olvqapq', form.current, 'HuHStPwtpkKj-c0y9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='contact-container' id='contact'>
            <h3>Contact</h3>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />

                <label>Email</label>
                <input type="email" name="user_email" />

                <label>Message</label>
                <textarea name="message" rows={4}/>

                <input type="submit" value="Send" />
            </form>

        </div>
    )
}

export default Contact