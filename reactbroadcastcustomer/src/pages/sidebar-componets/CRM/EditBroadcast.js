import React, { useEffect, useState } from 'react';
import { MenuItem, TextField, Box, Button } from '@mui/material';
import Navbar from '../../../components/navbar/Index'
import Sidebar from '../../../components/sidebar/Index';
import frame1 from '../../../assets/image/frames/frame1.png';
import frame2 from '../../../assets/image/frames/frame2.png';
import frame3 from '../../../assets/image/frames/frame3.png';
import frame4 from '../../../assets/image/frames/frame4.png';
import frame5 from '../../../assets/image/frames/frame5.png';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import whatsapp from '../../../assets/image/whatsapp.png';
import email from '../../../assets/image/email.png';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const filterData = [
    { value: "data1", label: "Season Greetings" },
    { value: "data2", label: "Newly Wed wishes" },
    { value: "data3", label: "New born-girl wishes" },
    { value: "data4", label: "New born-boy wishes" },
    { value: "data5", label: "Exceptional achievments" },
    { value: "data6", label: "Job well done" }
]

const groupdata = [
    { value: "teamMembers", label: "Team members" },
    { value: "customers", label: "Customers" },
    { value: "vendors", label: "Vendors" },
    { value: "searchableContact", label: "Searchable contact" }
]


function EditBroadcast() {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const [filterdata, setFilterData] = useState('data1')
    const [groupData, setGroupData] = useState('teamMembers')

    const handleChangefilter = (e) => {
        setFilterData(e.target.value);

    }

    const handleChangegroup = (e) => {
        setGroupData(e.target.value);
    }

    return <>
        <Navbar />
        {/* <div className='overflow-auto'> */}
            <div className="app-container wide overflow-auto" id="dashboard-main">
                <div className="sidebar-overlay"></div>
                <Sidebar />
                <div className='page-broadcast '>
                    <div className='app-layout-wrapper broadcast'>
                        <div className="app-layout page-ecard">
                            <div className='broadcast-page'>
                                <div className='inner-form-wrapper'>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h5>Edit Broadcast</h5>
                                        <div className='edit-btn'>
                                            <Link to='/broadcast' style={{ textDecoration: 'none' }}>
                                                <Button variant="outlined" className='btn-filter' sx={{ ml: 2 }} startIcon={<ArrowBackIcon />}>Back</Button>
                                            </Link>

                                        </div>
                                    </div>
                                    <div className='add-card'>
                                        <div>
                                            <Box
                                                component="form"
                                                sx={{
                                                    '& .MuiTextField-root': { m: 1, width: '60ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <div className='input-box'>
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Title"
                                                        defaultValue="Independence Day"

                                                    />
                                                    <TextField
                                                        select
                                                        id="outlined-disabled"
                                                        label="Type"
                                                        value={filterdata}
                                                        onChange={handleChangefilter}
                                                    >
                                                        {filterData.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>

                                                </div>
                                                <div className='input-box'>
                                                    <TextField
                                                        select
                                                        id="outlined-disabled"
                                                        label="Type"
                                                        value={groupData}
                                                        onChange={handleChangegroup}
                                                    >
                                                        {groupdata.map((option1) => (
                                                            <MenuItem key={option1.value} value={option1.value}>
                                                                {option1.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>

                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <DateTimePicker
                                                            label="Date&Time picker"
                                                            value={value}
                                                            onChange={handleChange}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />
                                                    </LocalizationProvider>

                                                </div>
                                                <div className='input-box'>
                                                    <TextField
                                                        required
                                                        multiline
                                                        id="outlined-required"
                                                        label="Massage"
                                                        //  maxRows={1}
                                                        defaultValue="This Independence Day let's take a pledge to protect the peace and unity of our great nation. Happy Independence Day!"
                                                    />
                                                </div>
                                            </Box>
                                            <h6 style={{ margin: "10px" }}>Select template</h6>
                                            <div style={{ borderTop: "1px dashed #979899", margin: "10px" }}></div>
                                            <div className='row top-down'>
                                                <div className='col-md-2'>
                                                    <label className='radio-checkbox-label' id="tmp-1">
                                                        <input type="radio" name="tmp" id="tmp-1" checked />
                                                        <div className='radio-img-box'>
                                                            <img src={frame1} alt="f1" />
                                                            <span className='radio-icon'>
                                                                <CheckCircleIcon />
                                                            </span>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className='col-md-2'>
                                                    <label className='radio-checkbox-label' id="tmp-2">
                                                        <input type="radio" name="tmp" id="tmp-2" />
                                                        <div className='radio-img-box'>
                                                            <img src={frame2} alt="f2" />
                                                            <span className='radio-icon'>
                                                                <CheckCircleIcon />
                                                            </span>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className='col-md-2'>
                                                    <label className='radio-checkbox-label' id="tmp-3">
                                                        <input type="radio" name="tmp" id="tmp-3" />
                                                        <div className='radio-img-box'>
                                                            <img src={frame3} alt="f3" />
                                                            <span className='radio-icon'>
                                                                <CheckCircleIcon />
                                                            </span>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className='col-md-2'>
                                                    <label className='radio-checkbox-label' id="tmp-4">
                                                        <input type="radio" name="tmp" id="tmp-4" />
                                                        <div className='radio-img-box'>
                                                            <img src={frame4} alt="f4" />
                                                            <span className='radio-icon'>
                                                                <CheckCircleIcon />
                                                            </span>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className='col-md-2'>
                                                    <label className='radio-checkbox-label' id="tmp-5">
                                                        <input type="radio" name="tmp" id="tmp-5" />
                                                        <div className='radio-img-box'>
                                                            <img src={frame5} alt="f5" />
                                                            <span className='radio-icon'>
                                                                <CheckCircleIcon />
                                                            </span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <h6 style={{ margin: "10px" }}>Platforms</h6>
                                            <div style={{ borderTop: "1px dashed #979899", margin: "10px" }}></div>
                                            <div className='row top-down'>
                                                <div className='col-md-2'>
                                                    <label className='radio-checkbox-label' id="tmp-1">
                                                        <input type="checkbox" name="tmp" id="tmp-1" checked />
                                                        <div className='checkbox-img-box'>
                                                            <img src={whatsapp} alt="whatsapp" />
                                                            <span className='checkbox-text'>whatsapp</span>
                                                            <span className='checkbox-icon'>
                                                                <CheckCircleIcon />
                                                            </span>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className='col-md-2'>
                                                    <label className='radio-checkbox-label' id="tmp-2">
                                                        <input type="checkbox" name="tmp" id="tmp-2" checked />
                                                        <div className='checkbox-img-box'>
                                                            <img src={email} alt="email" />
                                                            <span className='checkbox-text'>Email</span>
                                                            <span className='checkbox-icon'>
                                                                <CheckCircleIcon />
                                                            </span>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='d-flex align-item-center justify-content-center btn-save'>
                                                <Button variant="outlined">Cancel</Button>
                                                <Button variant="contained">Update</Button>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div>
        {/* </div> */}
    </>;
}

export default EditBroadcast;
