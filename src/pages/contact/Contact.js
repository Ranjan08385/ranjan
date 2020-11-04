import React, {useState, useCallback} from 'react'
import './Contact.css'
import {motion} from 'framer-motion'
import {contact, contactHead, contactName, contactEmail, contactTextArea, contactButton} from './Animation'

function Contact() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [textArea, setTextArea] = useState('');

    // const _setNameValue = event => {
    //     console.log('text input', event.target.value);
    //     if(event.target.value === '') {
    //         setNameError('Please enter name');
    //     } else {
    //         setNameError('');
    //         useCallback(event => setName(event.target.value), [setName])
    //     }
    // }

    const _handleChangeName = useCallback(event => setName(event.target.value), [setName]);
    const _handleChangeEmail = useCallback(event => setEmail(event.target.value), [setEmail]);
    const _handleChangeTextArea = useCallback(event => setTextArea(event.target.value), [setTextArea]);

    const onClickSend = () => {
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        let flagName = true;
        let flagEmail = true;
        console.log('check', emailRegex.test(email));
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
            alert('Call API')
        }
    }
    return (
            <motion.div  variants={contact} initial="hidden" animate="visible" className="contact" id="contact">
                <div className="contact__head">
                    <motion.h1 variants={contactHead}>Contact</motion.h1>
                </div>

                <div className="contact__form">
                    <motion.div variants={contactName} className="contact__nameSec">
                        <input className="contact__nameField" type="text" placeholder="Name" value={name} onChange={_handleChangeName} />
                        <p style={{color: '#4070f4', fontSize: 14}}>{nameError}</p>
                    </motion.div>
                    <motion.div variants={contactEmail} className="contact__emailSec">
                        <input className="contact__emailField" type="email" placeholder="Email" value={email} onChange={_handleChangeEmail} />
                        <p style={{color: '#4070f4', fontSize: 14}}>{emailError}</p>
                    </motion.div>
                    <motion.div variants={contactTextArea} className="contact__textAreaSec" value={textArea} onChange={_handleChangeTextArea}>
                        <textarea className="contact__textAreaField"  />
                    </motion.div>
                    <motion.div variants={contactButton} className="contact__buttonSec">
                        <button className="contact__button" onClick={() => onClickSend()}>Send</button>
                    </motion.div>
                </div>
            </motion.div>
      
       
    )
}

export default Contact
