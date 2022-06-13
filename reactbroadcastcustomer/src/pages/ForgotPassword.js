import React, { useEffect } from 'react';
import GmLogo from '../assets/image/gm_logo.svg';
import Building from '../assets/image/construction.png';
import { Link } from 'react-router-dom';

function ForgotPassword() {

    return <>
        <div className='page-login page-auth'>
            <div className="auth-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12 fix-content">
                            <div className="login-form-wrapper">
                                <Link to="/forgot_password" className="fix-logo d-block mb-3">
                                    <img src={GmLogo} alt="KBC Logo" style={{ width: "150px" }} />
                                </Link>
                                <h4>Recover your password</h4>
                                <form autocomplete="off" className="has-label-on-border">
                                    <div className="form-group">
                                        <label htmlFor="emailId">Email <span className="asterisk">*</span> </label>
                                        <input type="text" className="form-control" id="emailId" />
                                        {/* <div id="emailValidation" className="validationAlert">Email is required</div> */}
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className="btn btn-primary" type="submit">Submit <i className="mdi mdi-arrow-right ml-1"></i></button>
                                        <Link to="/login" className="forgot-pass-link btn-link">Back to login</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 fxt-bg-img" style={{ backgroundImage: `url(${Building})` }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default ForgotPassword;
