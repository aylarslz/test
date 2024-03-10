import React, { useRef, useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const ForgotPassword = () => {
    const [forgotemail, setForgotemail] = useState("")
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (forgotemail == localStorage.getItem('email')) {
            emailjs
            .sendForm('service_wn9tvod', 'template_io79phr', form.current, {
              publicKey: 'LSSOy5PJPy3BYV_rh',
            })
            .then(
              () => {
                alert("We've sent the password to your email address, please check it")
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        } else{
            alert("Invalid email address")
        }
      };
    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center flex-column my-5">
                <h1 className='my-5'>Forgot password?</h1>
                <Col sm={6}>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label className="form-label">Enter your email address</label>
                            <input type="email" onChange={e=>setForgotemail(e.target.value)} className="form-control" />
                            <input name='forgot_password' value={localStorage.getItem("password")} type="hidden" className="form-control" />
                            <input name='user_name' value={localStorage.getItem("fullname")} type="hidden" className="form-control" />
                        </div>
                    <button type="submit" className="btn btn-success">Send</button>
                    </form>
                </Col>
            </div>
        </Container>
    )
}

export default ForgotPassword