import React from 'react';
import Logo from "../img/barhop.png"

const Register = () => {

    return (
        <div className='registerForm'>
            <div className="left">
                <img src={Logo} width='40%' style={{marginBottom:'10px'}} />
                <div style={{  display: 'flex', justifyContent: 'center'}} >
                    <div className="registerleft" style={{ alignSelf: 'center', justifySelf:'center'}}>
                        <form STYLE={{display: 'flex', flexDirection: 'column'}}>
                            <h1 style={{ marginTop: 0 }} >Register!</h1>
                            <label>Name</label>
                            <input type="text" />
                            <label>Username</label>
                            <input type="text" />
                            <label>Email</label>
                            <input type="text" />
                            <label>Password</label>
                            <input type="Password" />
                            <label>Location</label>
                            <input type="text" />
                        <div className="footerRegister">
                                <button >Create Account</button>
                            <div>
                                Have an account? <a href="hi.com">Login!</a>
                            </div>
                        </div>            
                        </form>
                    </div>
                </div>
            </div>
            <div className="registerright"></div>
            
        </div>
    )
}

export default Register;