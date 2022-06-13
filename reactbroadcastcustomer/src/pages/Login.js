import React, { useEffect } from 'react';
import GmLogo from '../assets/image/gm_logo.svg';
import Building from '../assets/image/construction.png';
import { Link } from 'react-router-dom';
function Login() {
    return <>
  
        <div className='page-login page-auth'>
            <div className="auth-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12 fix-content">
                            <div className="login-form-wrapper">
                                <Link to="/login" className="fix-logo d-block mb-3">
                                    <img src={GmLogo} alt="GM Logo" style={{ width: "150px" }} />
                                </Link>
                                <h4>Welcome to INSIGHT</h4>
                                <form autocomplete="off" className="has-label-on-border">
                                    <div className="form-group">
                                        <label htmlFor="emailId">Email Address <span className="asterisk">*</span></label>
                                        <input type="text" id="emailId" className="form-control" />
                                        {/* <div id="emailValidation" className="validationAlert">Email is required</div> */}
                                    </div>
                                    <div className="form-group mb-15">
                                        <label htmlFor="loginPassord">Password <span className="asterisk">*</span></label>
                                        <div className="password-wrapper">
                                            <input type="password" id="loginPassord" className="form-control" />
                                            <button type="button" className="togglePassword">
                                                <i className="fa fa-eye togglePassword" toggle="#loginPassord"></i>
                                            </button>
                                        </div>
                                        {/* <div id="passValidation" className="validationAlert">Password is required</div> */}
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <label htmlFor="remeberMe" className="item-checkbox checkbox-inline">
                                            <input name="remember" id="remeberMe" type="checkbox" />
                                            <div className="check">
                                                <i className="far fa-square"></i>
                                                <span className="remeber-me ml-2">Keep me logged in</span>
                                            </div>
                                        </label>
                                        <div className="text-right"><Link className="forgot-pass-link btn-link" to="/forgot_password">Forgot Password ?</Link></div>
                                    </div>
                                    <Link to="/" className="btn btn-primary mt-3" type="submit">Login <i className="mdi mdi-arrow-right ml-1"></i></Link>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 fxt-bg-img d-sm-none d-md-flex" style={{ backgroundImage: `url(${Building})` }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Login;
