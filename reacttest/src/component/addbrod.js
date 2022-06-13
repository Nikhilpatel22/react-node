import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
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
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Grid, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import whatsapp from '../../../assets/image/whatsapp.png';
import email from '../../../assets/image/email.png';






function AddBroadcast() {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return <>
        <Navbar />
        <div className="main-broadcast" style={{ overflow: "scroll" }}>
            <Sidebar />
            <div >
                <div className='app-layout-wrapper'>
                    <div >
                        <h4>Add Broadcast</h4>
                        <div className='main-form'>
                            <Grid container ml={10} mt={5} mb={5} >
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Title"
                                        // rows={4}
                                        // defaultValue="Hello World"
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            select
                                            label="Type"
                                        // value={currency}
                                        // onChange={handleChange} 
                                        ></TextField>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            select
                                            label="Select Groups"
                                        // value={currency}
                                        // onChange={handleChange}
                                        ></TextField>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DateTimePicker
                                                label="Date&Time picker"
                                                value={value}
                                                onChange={handleChange}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                        <div style={{ width: "708px" }}>
                                            <FormControl fullWidth sx={{ m: 1 }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Message *</InputLabel>
                                                <OutlinedInput
                                                    required
                                                    id="outlined-required"
                                                    // value={values.amount}
                                                    // onChange={handleChange('amount')}
                                                    multiline
                                                    // startAdornment={<InputAdornment position="start"></InputAdornment>}
                                                    label="Amount"
                                                />
                                            </FormControl>
                                        </div>
                                        <h6 style={{ paddingTop: "20px" }}>Select template</h6>
                                        <div style={{ borderTop: "1px dashed black", width: "708px" }}></div>
                                        <div className="row top-down">
                                            <div className="col-md-2">
                                                <label className="platform-wrapper" id="frames1">
                                                    <input type="radio" name="selectTemplate" id="frames1" />
                                                    <div className="card-content">
                                                        <img className="template-images" src={frame1} alt="frames" />
                                                        {/* <span className="check-icon">
                                                                        <i className="fas fa-check-circle"></i>
                                                                    </span> */}
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="col-md-2">
                                                <label className="platform-wrapper" id="frames2">
                                                    <input type="radio" name="selectTemplate" id="frames2" />
                                                    <div className="card-content">
                                                        <img className="template-images" src={frame2} alt="frames" />
                                                        {/* <span className="check-icon">
                                                                        <i className="fas fa-check-circle"></i>
                                                                    </span> */}
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <h6 style={{ paddingTop: "20px" }}>Platforms</h6>
                                        <div style={{ borderTop: "1px dashed black", width: "708px" }}></div>
                                        <div className="row top-down">
                                            <div className="col-md-2">
                                                <label className="platform-wrapper" id="whastappCheck" >
                                                    <input type="checkbox" name="selectTemplate" id="whastappCheck" />
                                                    <div className="card-content">
                                                        <img className="social-image" src={whatsapp} alt="whatsapp" />
                                                        <span className="card-text">whatsapp</span>
                                                    </div>
                                                </label>
                                            </div>

                                            <div className="col-md-2">
                                                <label className="platform-wrapper" id="outlookCheck">
                                                    <input type="checkbox" name="selectTemplate" id="outlookCheck" />
                                                    <div className="card-content">
                                                        <img className="social-image" src={email} alt="email" />
                                                        <span className="card-text">Email</span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </Box>
                            </Grid>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    </>;
}

export default AddBroadcast;
