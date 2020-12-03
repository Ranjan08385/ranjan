import React, {useState, useCallback, useEffect} from 'react'
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {motion} from 'framer-motion'
import {contact, contactHead, contactName, contactEmail, contactTextArea, contactButton} from './Animation'
import emailjs from 'emailjs-com';

function Contact() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [textArea, setTextArea] = useState('');

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    // const _setNameValue = event => {
    //     console.log('text input', event.target.value);
    //     if(event.target.value === '') {
    //         setNameError('Please enter name');
    //     } else {
    //         setNameError('');
    //         useCallback(event => setName(event.target.value), [setName])
    //     }
    // }

    const _handleChangeName = useCallback(event => {setName(event.target.value);  setNameError('')}, [setName]);
    const _handleChangeEmail = useCallback(event => {setEmail(event.target.value); setEmailError('')}, [setEmail]);
    const _handleChangeTextArea = useCallback(event => setTextArea(event.target.value), [setTextArea]);

    const onClickSend = (e) => {
        e.preventDefault();
        console.log('check form value', e.target);
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        let flagName = true;
        let flagEmail = true;
        // console.log('check', emailRegex.test(email));
        if(name === '') {
            setNameError('Please enter your name');
            flagName = false;
        } else {
            flagName = true;
            setNameError('');
        }

        if(email === '') {
            setEmailError('Please enter your email id');
            flagEmail = false;
        } else if(!emailRegex.test(email)) {
            setEmailError('Please enter valid email id');
            flagEmail = false;
        } else {
            flagEmail = true;
            setEmailError('')
        }

        if(flagName && flagEmail) {
            //alert('Call API')
            emailjs.sendForm('gmail', 'template_vh8f9es', e.target, 'user_TrWdpE73IGqRxfCLD0cNO')
                .then((result) => {
                    console.log(result.text);
                    setName('');
                    setEmail('');
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
        }
    }
    return (
            <motion.div  variants={contact} initial="hidden" animate="visible" className="contact" id="contact">
                <div data-aos="fade-down" className="contact__head">
                    <motion.h1 variants={contactHead}>Contact</motion.h1>
                </div>
                <form onSubmit={(e) => onClickSend(e)}>
                <div className="contact__form">
                    <div data-aos="fade-right" data-aos-delay="100" variants={contactName} className="contact__nameSec">
                        <input className="contact__nameField" type="text" placeholder="Name" name="name" value={name} onChange={_handleChangeName} />
                        <p style={{color: '#4070f4', fontSize: 14}}>{nameError}</p>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="300" variants={contactEmail} className="contact__emailSec">
                        <input className="contact__emailField" type="email" placeholder="Email" name="email" value={email} onChange={_handleChangeEmail} />
                        <p style={{color: '#4070f4', fontSize: 14}}>{emailError}</p>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="600" variants={contactTextArea}  className="contact__textAreaSec" value={textArea} onChange={_handleChangeTextArea}>
                        <textarea className="contact__textAreaField" name="message" />
                    </div>
                    <div data-aos="fade-right" data-aos-delay="900" variants={contactButton} className="contact__buttonSec">
                        {/* <button className="contact__button" onClick={(e) => onClickSend(e)}>Send</button> */}
                        <input type="submit" className="contact__button" value="send" />
                    </div>
                </div>
                </form>
            </motion.div>
      
       
    )
}

export default Contact
