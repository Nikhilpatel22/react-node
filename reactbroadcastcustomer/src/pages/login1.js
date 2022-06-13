import React from 'react'
import { Navbar, Container, Nav, NavDropdown, ProgressBar } from 'react-bootstrap';
import logo from '../assets/logo/talklogo.png'
import { MenuItem, TextField, Box, Button, InputAdornment } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { makeStyles } from "@material-ui/core/styles";
import MuiPhoneInput from 'material-ui-phone-number';
import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import 'react-phone-input-2/lib/style.css'
// import 'react-phone-input-2/lib/material.css'

const Login1 = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" >
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src={logo}
                            width="120px"
                            height="100%"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-main">
                            <Nav.Link style={{ fontWeight: 600, color: "#343a40" }}>Features</Nav.Link>
                            <Nav.Link style={{ fontWeight: 600, color: "#343a40" }}>Offering</Nav.Link>
                            <Nav.Link style={{ fontWeight: 600, color: "#343a40" }}>Solution</Nav.Link>
                            <Nav.Link style={{ fontWeight: 600, color: "#343a40" }}>Chatbot Template</Nav.Link>
                            <Nav.Link style={{ fontWeight: 600, color: "#343a40" }}>Industries</Nav.Link>
                            <Nav.Link style={{ fontWeight: 600, color: "#343a40" }}>Pricing</Nav.Link>
                            <Nav.Link style={{ fontWeight: 600, color: "#343a40" }}>Contact Us</Nav.Link>
                            <Nav.Link className='nav-login' style={{ color: 'white' }}>Login</Nav.Link>
                            <Nav.Link className='nav-signup' style={{ color: 'white' }}>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <div>
                    <div className='overflow-scroll'>
                        <div className='main-login'>
                            <div className='login-card '>
                                <div className='card-body'>
                                    <div className="row">
                                        <div className='col-md-12'>
                                            <h5>Sign Up</h5>
                                        </div>
                                        <div className='col-md-12 mt-4'>
                                            <TextField
                                                size="small"
                                                InputLabelProps={{ shrink: true }}
                                                fullWidth
                                                id="outlined-basic"
                                                label={<span className='lable-text'>Email Id<p className='lable-text-star'>*</p></span>}
                                                variant="outlined"
                                                InputProps={
                                                    {
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <Button
                                                                    aria-label="Add"
                                                                    edge="end"
                                                                    color="primary"
                                                                    variant="contained"
                                                                    style={{ textTransform: "capitalize" }}
                                                                >
                                                                    Send OTP
                                                                </Button>
                                                            </InputAdornment>
                                                        )
                                                    }
                                                }
                                            />
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <TextField
                                                size="small"
                                                InputLabelProps={{ shrink: true }}
                                                fullWidth
                                                id="outlined-basic"
                                                label={<span className='lable-text'>First Name<p className='lable-text-star'>*</p></span>}
                                                variant="outlined"

                                            />
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <TextField
                                                size="small"
                                                InputLabelProps={{ shrink: true }}
                                                fullWidth
                                                id="outlined-basic"
                                                label={<span className='lable-text'>Last Name<p className='lable-text-star'>*</p></span>}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            {/* <TextField
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        size="small" 
                                        id="outlined-basic"
                                        label={<span className='lable-text'>Mobile Number<p className='lable-text-star'>*</p></span>}
                                        variant="outlined"
                                    /> */}
                                            <MuiPhoneInput
                                                defaultCountry='us'
                                                variant="outlined"
                                                size="small"

                                                label={<span className='lable-text'>Phone Number<p className='lable-text-star'>*</p></span>}
                                            />
                                            {/* <PhoneInput
                                                country='de'
                                                regions={'europe'}
                                            /> */}

                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <TextField
                                                InputLabelProps={{ shrink: true }}
                                                fullWidth
                                                size="small"
                                                id="outlined-basic"
                                                label={<span className='lable-text'>Company Name<p className='lable-text-star'>*</p></span>}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className='col-md-12 mt-3'>
                                            <TextField
                                                InputLabelProps={{ shrink: true }}
                                                select
                                                fullWidth
                                                size="small"
                                                id="outlined-basic"
                                                label={<span className='lable-text'>Select Plan<p className='lable-text-star'>*</p></span>}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className='col-md-12 mt-2'>
                                            <span className='d-flex text-month'>
                                                <p style={{ color: "#5a19a5", paddingRight: "5px" }}>Free</p>
                                                trail for a month includes
                                            </span>
                                        </div>
                                        <div className='col-md-12'>
                                            <span className='font-size'>
                                                <CheckCircleIcon color='success' className="svg_icons" />
                                                <span className='text-chatboat'>1 Chatboat </span>
                                            </span>
                                        </div>
                                        <div className='col-md-12'>
                                            <span>
                                                <DangerousIcon color="error" className="svg_icons" />
                                                <span className='text-chatboat'>Agent(s) for Live Chat</span>
                                            </span>
                                        </div>
                                        <div className='col-md-12'>
                                            <span>
                                                <DangerousIcon color="error" className="svg_icons" />
                                                <span className='text-chatboat'>Broadcast</span>
                                            </span>
                                        </div>
                                        <div className='col-md-12 mt-3'>
                                            <div style={{ borderTop: "1px solid #979899" }}></div>
                                        </div>
                                        <div className='col-md-12 mt-3 d-flex'>
                                            <div >
                                                <h3 >$0</h3>
                                                <span className='text-color-grey'>you pay</span>
                                            </div>
                                            <div className='signUp-btn'>
                                                <button>Sign Up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='col-md-12 mt-3'>
                            <div className='borderedclass'>
                                {/* <ProgressBar >
                        <ProgressBar striped variant="success" now={35} key={1} />
                        <ProgressBar striped variant="warning" now={20} key={2} />
                        <ProgressBar striped  variant="danger" now={10} key={3} />
                    </ProgressBar> */}
                            </div>
                        </div>
                        <div className='login-footer'>
                            <div><p>Copyright &copy; {(new Date().getFullYear())} Your Name All Rights Reserved</p></div>
                            <div className='fotter-link'>Legal</div>
                            <div className='fotter-link'>Cookies</div>
                            <div className='fotter-link'>Status</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login1