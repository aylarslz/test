import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [fullname,setFullname] = useState("");
    const [phonenumber,setPhonenumber] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [againpass,setAgainpass] = useState("");
    const navigate = useNavigate();
    const [show, setShow] = useState(null);
    const [confirm, setConfirm] = useState(null);

    const showPass = () => {
      setShow(!show);
    };

    const showConfirm = () => {
      setConfirm(!confirm)
    };
  
    const formSubmited = e=>{
        e.preventDefault();
        if (!fullname || !phonenumber || !email || !pass || !againpass) {
            alert("Please, fill all the empty blanks");
        }else{
            if (pass === againpass) {
                localStorage.setItem("fullname",fullname);
                localStorage.setItem("password",pass);
                localStorage.setItem("email",email);
                localStorage.setItem("login","false");
                navigate("/login");
            }else{
                alert("Password is different!")
            }
        }
    }
    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center flex-column my-5">
                <h1 className='my-5'>Register</h1>
                <Col sm={6}>
                    <form onSubmit={formSubmited}>
                        <div className="mb-3">
                            <label className="form-label">Full name</label>
                            <input value={fullname} onChange={e=>setFullname(e.target.value)} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Number</label>
                            <input value={phonenumber} onChange={e=>setPhonenumber(e.target.value)} type="tel" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control" />
                        </div>

                        <div className="register mb-3">
                    <label className="form-label">Password</label>
                          <input type={show ? "text" : "password"} className="login-input form-control" onChange={e => setPass(e.target.value)} />
                          <span className="eye" onClick={showPass}>
                              {show ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                          </span>
                      </div>

                      <div className="confirm mb-3">
                    <label className="form-label">Confirm password</label>
                          <input type={confirm ? "text" : "password"} className="login-input form-control" onChange={e=>setAgainpass(e.target.value)} />
                          <span className="eye" onClick={showConfirm}>
                              {confirm ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                          </span>
                      </div>

                        <button type="submit" className="btn btn-success">Register</button>
                    </form>
                <p className='mt-3'><Link to="/login" className='text-primary'>Already have an account?</Link></p>

                </Col>
            </div>
        </Container>
    )
}

export default Register