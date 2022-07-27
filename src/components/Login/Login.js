import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from "@fortawesome/free-solid-svg-icons";
const Login = () => {
    const [showpassword,setshowpassword] = useState(false);
    const togglepassword = ()=>{
       setshowpassword(!showpassword);
    }
    return (
        <div className="login">
          <div className="login-img">
              <img src="/Authority/login.png" alt="" />
          </div>
            <div className="user-login">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3 pass">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input type={showpassword?"text":"password"} className="form-control" id="passfield"/>
                    <i className='eye' onClick={togglepassword}><FontAwesomeIcon icon={faEye} /></i>
                </div>
                <button type="submit" className='btn btn-primary'>Login</button>
            </div>  
        </div>
    );
};

export default Login;