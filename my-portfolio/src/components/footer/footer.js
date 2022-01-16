import './footer.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/world.png'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

    const formRef = useRef();
    const [done, setDone] = useState(false)

    function handleSubmit(event){
        event.preventDefault();
        
        emailjs.sendForm('service_xu4sjze', 'template_x36zhuc', formRef.current, 'user_vfKlHEVcBC4yxN8Ye77iE')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's talk!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="small icon of phone" className="c-icon" />
                            (858)465-6739
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="small icon of email" className="c-icon" />
                            griveroll86@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="small icon of address/world" className="c-icon" />
                            Dayton, Ohio
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Feel free to contact me anytime by filling out the form below.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;