import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/Index'
import Sidebar from '../../../components/sidebar/Index';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from 'react-router-dom';
import Add from '@material-ui/icons/Add';
import Button from '@mui/material/Button';

const Customers = () => {
    return (
        <div>
            <Navbar />
            <div className="app-container wide overflow-auto" id="dashboard-main">
                <div className="sidebar-overlay"></div>
                <Sidebar />
                <div className='page-broadcast'>
                    <div className='app-layout-wrapper broadcast'>

                        <div className="app-layout page-ecard">
                            <div className='broadcast-page'>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4>Customers</h4>
                                    <div className='broadcast-add-btn'>
                                        <Link to='/customers/add' className='text-decoration-none'>
                                            <Button
                                                variant="contained"
                                                className='btn-add'
                                                color="primary"
                                                startIcon={<Add />}
                                            >
                                                Add Customers
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="outlined"
                                            className='btn-filter'
                                            sx={{ ml: 2 }}
                                            startIcon={<FilterAltIcon />}
                                            // onClick={() => setFilter(true)}
                                        >
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers