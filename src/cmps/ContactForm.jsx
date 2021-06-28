import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_mJ8MfY8IVIm3sKzmeznvT");

export function ContactForm() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_001iee9', 'template_7ad3gk6', e.target,init("user_mJ8MfY8IVIm3sKzmeznvT"))
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <div>
            <form className="contact-form" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
