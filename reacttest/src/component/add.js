import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/navbar/Index';
import Sidebar from '../../../components/sidebar/Index';
import frame1 from '../../../assets/image/frames/frame1.png';
import frame2 from '../../../assets/image/frames/frame2.png';
import frame3 from '../../../assets/image/frames/frame3.png';
import frame4 from '../../../assets/image/frames/frame4.png';
import frame5 from '../../../assets/image/frames/frame5.png';
import whatsapp from '../../../assets/image/whatsapp.png';
import email from '../../../assets/image/email.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Select from "react-dropdown-select";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

function AddBroadcast() {
    const [value, setValue] = useState(new Date());
    const [typeOption, setTypeOption] = useState([
        { value: "SeasonGreetings", label: "Season Greetings" },
        { value: "WorkAnniversary", label: "Newly Wed wishes" },
        { value: "NewlyWedwishes", label: "Newly Wed wishes" },
        { value: "Newborngirl", label: "New born-girl wishes" },
        { value: "Newbornboywishes", label: "New born-boy wishes" },
        { value: "ExceptionalAchievments", label: "Exceptional achievments" },
        { value: "Jobwelldone", label: "Job well done" },
        { value: "NewJoining", label: "Custom" }
    ]);

    const [groupOption, setGroupOption] = useState([
        { value: "teamMembers", label: "Team members" },
        { value: "customers", label: "Customers" },
        { value: "vendors", label: "Vendors" },
        { value: "searchableContact", label: "Searchable contact" }
    ]);

    return <>
        <Navbar />
        <div className='page-broadcast'>
            <div className="app-container wide" id="dashboard-main">
                <div className="sidebar-overlay"></div>
                <Sidebar />
                <div className='app-layout-wrapper broadcast'>
                    <div className="app-layout page-ecard">
                        <div className='addbrodcast-page'>
                            <div className="inner-form-wrapper">
                                <div className="d-flex justify-content-between align-items-center pb-3">
                                    <h1 className="page-title">Add Broadcast</h1>
                                    <div className="btn-wrapper">
                                        <Link to="/broadcast" className="btn btn-outline-primary btn-sm">
                                            <ArrowBackIcon className="fa fa-arrow-left add_broadcast" /> Back
                                        </Link>
                                    </div>
                                </div>
                                <form action="" className="has-label-on-border">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="broadcastTitle">Title <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="broadcastTitle" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 broadcast_select">
                                                    <div className="form-group mb-2">
                                                        <label htmlFor="cardType">Type <span className="text-danger">*</span></label>
                                                        <Select className='addbroadcast_type form-control'
                                                            placeholder='--'
                                                            options={typeOption}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-2">
                                                        <label htmlFor="selectGroups">Select Groups <span className="text-danger">*</span></label>
                                                        <Select
                                                            id="selectGroups"
                                                            className='addbroadcast_option'
                                                            placeholder='--'
                                                            multi
                                                            options={groupOption}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="broadcastDate">Broadcast Date  & Time <span className="text-danger">*</span></label>
                                                        {/* <input type="date" className="form-control date-time-picker" id="broadcastDate" autoComplete="off" />
                                                    <span className="dateCalender time-format">
                                                        <i className="fa fa-calendar"></i>
                                                    </span> */}
                                                        <div className='broadcast_date'>
                                                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                                                <DateTimePicker
                                                                    className="form-control"
                                                                    renderInput={(props) => <TextField {...props} />}
                                                                    value={value}
                                                                    onChange={(newValue) => {
                                                                        setValue(newValue);
                                                                    }}
                                                                />
                                                            </LocalizationProvider>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <label htmlFor="message">Message <span className="text-danger">*</span></label>
                                                    <textarea id="message" className="form-control resize-none"></textarea>
                                                </div>
                                                <div className="col-md-12">
                                                    <h6 className="mb-2">Select template</h6>
                                                    <div className="form-devider"></div>
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <label className="platform-wrapper" id="frames1">
                                                                <input type="radio" name="selectTemplate" id="frames1" />
                                                                <div className="card-content">
                                                                    <img className="template-images" src={frame1} alt="frames" />
                                                                    <span className="check-icon">
                                                                        <i className="fas fa-check-circle"></i>
                                                                    </span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <label className="platform-wrapper" id="frames2">
                                                                <input type="radio" name="selectTemplate" id="frames2" />
                                                                <div className="card-content">
                                                                    <img className="template-images" src={frame2} alt="frames" />
                                                                    <span className="check-icon">
                                                                        <i className="fas fa-check-circle"></i>
                                                                    </span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <label className="platform-wrapper" id="frames3">
                                                                <input type="radio" name="selectTemplate" id="frames3" />
                                                                <div className="card-content">
                                                                    <img className="template-images" src={frame3} alt="frames" />
                                                                    <span className="check-icon">
                                                                        <i className="fas fa-check-circle"></i>
                                                                    </span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <label className="platform-wrapper" id="frames4">
                                                                <input type="radio" name="selectTemplate" id="frames4" />
                                                                <div className="card-content">
                                                                    <img className="template-images" src={frame4} alt="frames" />
                                                                    <span className="check-icon">
                                                                        <i className="fas fa-check-circle"></i>
                                                                    </span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <label className="platform-wrapper" id="frames5">
                                                                <input type="radio" name="selectTemplate" id="frames5" />
                                                                <div className="card-content">
                                                                    <img className="template-images" src={frame5} alt="frames" />
                                                                    <span className="check-icon">
                                                                        <i className="fas fa-check-circle"></i>
                                                                    </span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="mb-2">Platforms</h6>
                                            <div className="form-devider"></div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <label className="platform-wrapper" id="whastappCheck">
                                                        <input type="checkbox" name="selectTemplate" id="whastappCheck" />
                                                        <div className="card-content">
                                                            <img className="social-image" src={whatsapp} alt="whatsapp" />
                                                            <span className="card-text">whatsapp</span>
                                                            <span className="check-icon">
                                                                <i className="fas fa-check-circle"></i>
                                                            </span>
                                                        </div>
                                                    </label>
                                                </div>

                                                <div className="col-md-2">
                                                    <label className="platform-wrapper" id="outlookCheck">
                                                        <input type="checkbox" name="selectTemplate" id="outlookCheck" />
                                                        <div className="card-content">
                                                            <img className="social-image" src={email} alt="email" />
                                                            <span className="card-text">Email</span>
                                                            <span className="check-icon">
                                                                <i className="fas fa-check-circle"></i>
                                                            </span>
                                                        </div>
                                                    </label>
                                                </div>


                                            </div>
                                            <div className="form-action text-center">
                                                <button type="button" className="btn btn-secondary mr-2">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default AddBroadcast;
