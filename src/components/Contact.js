import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import "./Contact.css"

const Contact = () => {
    const form = useRef();

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9avkhj7', 'template_olvqapq', form.current, 'HuHStPwtpkKj-c0y9')
            .then((result) => {
                console.log(result.text);
                setUserName("");
                setUserEmail("");
                setMessage("");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-container' id='contact'>
            <h3>Contact</h3>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text"
                    value={userName}
                    onChange={event => setUserName(event.target.value)}
                    name="user_name"
                    className='contact-input'
                />

                <label>Email</label>
                <input type="email"
                    value={userEmail}
                    onChange={event => setUserEmail(event.target.value)}
                    name="user_email"
                    className='contact-input'
                />

                <label>Message</label>
                <textarea name="message"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    rows={4}
                />

                <input type="submit" value="Send" className='submit-button' />
            </form>

        </div>
    )
}

export default Contact