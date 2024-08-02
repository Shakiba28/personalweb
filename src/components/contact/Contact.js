import React from "react";
import './Contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineWhatsApp } from 'react-icons/ai'


const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>shakibabaghishani@gmail.com</h5>
                        <a href="mailto:shakibabaghishani@gmail.com" target="_blank">Send a message</a>
                    </article>

                    {/* <article className="contact__option">
                        <BsLinkedin className="contact__option-icon" />
                        <h4>Linkdin</h4>
                        <h5>shakibabaghishani@gmail.com</h5>
                        <a href="https://telegram.com/_shakiba_28" target="_blank">Send a message</a>
                    </article> */}

                    <article className="contact__option">
                        <AiOutlineWhatsApp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+989363738295</h5>
                        <a href="https://api.whatsapp.com/send?phone=989363738295" target="_blank">Send a message</a>
                    </article>
                </div>
                {/*END OF CONTACT OPTIONS*/}
                <form action="">
                    <input type='text' name='name' placeholder="your full name" required />
                    <input type='email' name='email' placeholder="your email" required />
                    <textarea name='message' rows='7' placeholder="your message" required></textarea>
                    <button type="submit" className="btn btn-primery">Send Message</button>
                </form>
            </div>
        </section>
    )
}


export default Contact