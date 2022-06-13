import React, { useEffect, useState } from 'react';
import { MenuItem, TextField, FormControl, Select, InputLabel, Box, Button } from '@mui/material';
import Navbar from '../../../components/navbar/Index'
import Sidebar from '../../../components/sidebar/Index';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Documentpage = () => {
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
                                                    <div className='add-customer-btn'> <Link to="/customers/add"> <button >CONTACT</button></Link> </div>
                                                    <div className='add-customer-btn'>  <Link to="/customers/add/address"><button >ADDRESS</button></Link></div>
                                                    <div className='add-customer-btn'> <Link to="/customers/add/customer"> <button >CUSTOMER</button></Link> </div>
                                                    <div className='active-btn'>  <button >DOCUMENTS</button> </div>
                                                </div>
                                            </div>
                                            {Array.from(Array(counter)).map((c, index) => (
                                                <div>
                                                    <div className='mt-4'>
                                                        <div className='row'>
                                                            <div className='col-md-4 mt-4'>
                                                                <TextField
                                                                    InputLabelProps={{ shrink: true }}
                                                                    select
                                                                    fullWidth
                                                                    id="outlined-basic"
                                                                    label={<span className='lable-text'>Type<p className='lable-text-star'>*</p></span>}
                                                                    variant="outlined"

                                                                />
                                                            </div>
                                                            <div className='col-md-4 mt-4'>
                                                                <TextField
                                                                    InputLabelProps={{ shrink: true }}
                                                                    fullWidth
                                                                    id="outlined-basic"
                                                                    label={<span className='lable-text'>No<p className='lable-text-star'>*</p></span>}
                                                                    variant="outlined" />
                                                            </div>
                                                            <div className='col-md-4 mt-4'>
                                                                <TextField
                                                                    InputLabelProps={{ shrink: true }}
                                                                    fullWidth
                                                                    id="outlined-basic"
                                                                    type="file"
                                                                    label={<span className='lable-text'>Path<p className='lable-text-star'>*</p></span>}
                                                                    variant="outlined" />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className='btn-btn-add mt-4'>
                                                <Button variant='outlined' onClick={handleClick}>Add Document</Button>
                                                <div style={{ clear: "both" }}></div>
                                            </div>
                                            {/* <div className='btn-btn-add mt-4'>
                                                <Link to="#"><Button variant='contained' endIcon={<ArrowForwardIcon />}>Next</Button></Link>
                                                <div style={{ clear: "both" }}></div>
                                            </div> */}
                                            <div className='d-flex align-item-center justify-content-center btn-save'>
                                                <Button variant="outlined">Cancel</Button>
                                                <Button variant="contained" style={{ backgroundColor: "#1A3D6B" }}>Save</Button>
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
export default Documentpage