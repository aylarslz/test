import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [show, setShow] = useState(null);
    const notify = () => toast("Wow so easy!");

    const showPass = () => {
      setShow(!show);
  };

    const loginForm = e=>{
        e.preventDefault();
        if (!email || !pass) {
            alert('please, fill all inputs');
        }else{
            if (email == localStorage.getItem('email') && pass == localStorage.getItem('password')) {
                localStorage.setItem('login','true');
                window.location.assign('/shop');
            }else{
                alert('password or email is wrong!');
            }
        }
    }
    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center flex-column my-5">
                <h1 className='my-5'>Login</h1>
                <Col sm={6}>
                <form onSubmit={loginForm}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control"  />
                    </div>

                    <div className="login mb-3">
                    <label className="form-label">Password</label>
                          <input type={show ? "text" : "password"} className="login-input form-control" onChange={e => { setPass(e.target.value) }} />

                          <span className="eye" onClick={showPass}>
                              {show ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                          </span>
                      </div>

                    <button type="submit" onClick={notify} className="btn btn-success">Login</button>
                    <ToastContainer />
                </form>
                <p className='mt-3'><Link to="/register" className='text-primary'>Create new account</Link></p>
                <Link to="/forgotpassword" className='text-primary'>Forgot your password?</Link>
                </Col>
            </div>
        </Container>
    )
}

export default Login