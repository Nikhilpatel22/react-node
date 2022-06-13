import React, { useEffect, useState } from 'react';
import { MenuItem, TextField, Box, Button } from '@mui/material';
import Navbar from '../../../components/navbar/Index'
import Sidebar from '../../../components/sidebar/Index';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { red } from '@mui/material/colors';

const AddCustomers = () => {

    const [counter, setCounter] = useState(1)

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    return (
        <>
            <Navbar />
            <div className="app-container wide overflow-auto" id="dashboard-main">
                <div className="sidebar-overlay"></div>
                <Sidebar />
                <div className='page-broadcast'>
                    <div className='app-layout-wrapper'>
                        <div className="app-layout page-ecard">
                            <div className='broadcast-page'>
                                <div className='inner-form-wrapper'>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h5>Add Customers</h5>
                                        <div className='broadcast-add-btn'>
                                            <Link to='/customers' style={{ textDecoration: 'none' }}>
                                                <Button variant="outlined" className='btn-filter' sx={{ ml: 2 }} startIcon={<ArrowBackIcon />}>Back</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="add-card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className='d-flex'>
                                                    <div className='active-btn'>  <button >CONTACT</button> </div>
                                                    <div className='add-customer-btn'>  <Link to="/customers/add/address"><button >ADDRESS</button></Link></div>
                                                    <div className='add-customer-btn'>  <button >CUSTOMER</button> </div>
                                                    <div className='add-customer-btn'>  <button >DOCUMENTS</button> </div>
                                                </div>
                                            </div>
                                            {Array.from(Array(counter)).map((c, index) => (
                                                <div >
                                                    <div className='mt-5'>
                                                        <div className='row'>
                                                            <div className='col-md-3 mt-2'>
                                                                <TextField
                                                                    InputLabelProps={{ shrink: true }}
                                                                    fullWidth
                                                                    id="outlined-basic"
                                                                    // label="First Name"
                                                                    label={<span className='lable-text'>First Name<p className='lable-text-star'>*</p></span>}
                                                                    variant="outlined" />
                                                            </div>
                                                            <div className='col-md-3 mt-2'>
                                                                <TextField
                                                                    InputLabelProps={{ shrink: true }}
                                                                    fullWidth
                                                                    id="outlined-basic"
                                                                    label={<span className='lable-text'>Last Name<p className='lable-text-star'>*</p></span>}
                                                                    variant="outlined" />
                                                            </div>
                                                            <div className='col-md-3 mt-2'>
                                                                <TextField
                                                                    InputLabelProps={{ shrink: true }}
                                                                    fullWidth
                                                                    id="outlined-basic"
                                                                    label={<span className='lable-text'>Email<p className='lable-text-star'>*</p></span>}
                                                                    variant="outlined" />
                                                            </div>
                                                            <div className='col-md-3 mt-2'>
                                                                <TextField
                                                                    InputLabelProps={{ shrink: true}}
                                                                    fullWidth
                                                                    id="outlined-basic"
                                                                    label={<span className='lable-text'>Work Phone<p className='lable-text-star'>*</p></span>}
                                                                    variant="outlined" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='mt-4'>
                                                        <div className='row'>
                                                            <div className='col-md-3 mt-2'>
                                                                <TextField
                                                                    InputLabelProps={{ shrink: true }}
                                                                    fullWidth
                                                                    id="outlined-basic"
                                                                    label={<span className='lable-text'>Mobile<p className='lable-text-star'>*</p></span>}
                                                                    variant="outlined" />
                                                            </div>
                                                            <div className='col-md-3 mt-2'>
                                                                <TextField
                                                                    InputLabelProps={{ shrink: true}}
                                                                    fullWidth
                                                                    id="outlined-basic"
                                                                    label={<span className='lable-text'>Designation<p className='lable-text-star'>*</p></span>}
                                                                    variant="outlined" />
                                                            </div>
                                                            <div className='col-md-3 mt-2'>
                                                                <TextField
                                                                    InputLabelProps={{ shrink: true }}
                                                                    fullWidth
                                                                    id="outlined-basic"
                                                                    label={<span className='lable-text'>Department<p className='lable-text-star'>*</p></span>}
                                                                    variant="outlined" />
                                                            </div>
                                                            <div className='col-md-3 mt-2'>
                                                                <TextField
                                                                    InputLabelProps={{ shrink: true }}
                                                                    // InputProps={{
                                                                    //     style: {
                                                                    //         color: "red"
                                                                    //     }
                                                                    // }}
                                                                    fullWidth
                                                                    id="outlined-basic"
                                                                    label={<span className='lable-text'>Photo Path<p className='lable-text-star'>*</p></span>}
                                                                    variant="outlined" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            <div className='btn-btn-add mt-4 ' >
                                                <Button variant='outlined' onClick={handleClick}>Add Contact</Button>
                                                <div style={{ clear: "both" }}></div>
                                            </div>
                                            <div className='btn-btn-next mt-4'>
                                                <Link to="/customers/add/address"><Button variant='contained' endIcon={<ArrowForwardIcon />}>Next</Button></Link>
                                                <div style={{ clear: "both" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddCustomers