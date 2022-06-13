import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/Index';
import Sidebar from '../../../components/sidebar/Index';
import FilterFrames from '@material-ui/icons/FilterFrames';
import Add from '@material-ui/icons/Add';
import { Link, useNavigate } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Select from "react-dropdown-select";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Frame3 from '../../../assets/image/frames/frame3.png';
import whatsapp from '../../../assets/image/whatsapp.png';
import outlook from '../../../assets/image/outlook.png';
import { Button, Modal } from 'react-bootstrap';
function Broadcast() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [listData, setListData] = useState([
        {
            id: 1,
            Title: "Independence Day",
            BroadcastDateAndTime: '15/08/2021',
            Type: 'Season Greetings',
            SelectTemplate: 'Edinburgh',
            Message: "This Independence Day let's take a pledge to protect the peace and unity of our great nation. Happy Independence Day!",
            Platforms: "aa",
            ScheduleStatus: "Schduled",
            Senton: "15/08/2000",
        },
        {
            id: 2,
            Title: "Achievement",
            BroadcastDateAndTime: '11/12/2021',
            Type: 'Exceptional achievments',
            SelectTemplate: 'Tokyo',
            Message: "Congratulations {Tawheed Khan} on completing {10 years} at Gray Matrix. Here is us wishing you all the success in your life. #GrayMatrix #workanniversary #workcelebration #successs",
            Platforms: "aa",
            ScheduleStatus: "sent",
            Senton: "11/12/2021",

        }
    ]);
    const data = {
        columns: [
            {
                label: '#',
                field: 'id',
                width: 150
            },
            {
                label: 'Title',
                field: 'Title',
                sort: 'asc',
                width: 200,

            },
            {
                label: 'Broadcast Date & Time',
                field: 'BroadcastDateAndTime',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Type',
                field: 'Type',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Select Template',
                field: 'SelectTemplate',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Message',
                field: 'Message',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Platforms',
                field: 'Platforms',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Schedule Status',
                field: 'ScheduleStatus',
                sort: 'asc',
                width: 200
            },
            {
                name: 'Approve',
                minWidth: '170px',
                selector: 'Senton',
                width: 200
            },
            {
                label: 'Sent on',
                field: 'Senton',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Action',
                field: 'Action',
                width: 200,
            }

        ],
        rows: listData
    };

    const [filterFlag, setFilterFlag] = useState(false);
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


    useEffect(() => {
        data.rows.map(el => {
            el.Action = (
                <>
                    <div className='d-flex justify-content-center'>
                        <button class="btn btn-transparent text-warning-hover btn-sm mr-1"
                            title="Edit broadcast">
                            <EditIcon className="fa" onClick={editHandler} />
                        </button>
                        <button class="btn btn-transparent text-warning-hover btn-sm" title="Delete" onClick={() => setShow(true)}>
                            <DeleteIcon className="fa" />
                        </button>
                    </div>

                </>
            )
            el.SelectTemplate = (
                <>
                    <div class="img-wrapper">
                        <img src={Frame3} alt="birthday frames" />
                    </div>
                </>
            )
            el.Platforms = (
                <>
                    <div class="social-img-wrapper d-flex justify-content-center">
                        <img src={whatsapp} alt="birthday frames" />
                        <img src={outlook} alt="birthday frames" />
                    </div>

                </>
            )
            el.ScheduleStatus =
                (
                    <>
                        <span className={el.ScheduleStatus == "Schduled" ? "badge bg-inverse-warning" : " badge bg-inverse-success"}>{el.ScheduleStatus}</span>
                    </>
                )
        })
    }, [data]);

    const editHandler = () => {
        navigate('/broadcast/edit')
    }

    return <>
            <Navbar />
            <div className="app-container wide" id="dashboard-main">
                <div className="sidebar-overlay"></div>
                <Sidebar />
                <div className='page-broadcast'>
                    <div className='app-layout-wrapper broadcast'>

                        <div className="app-layout page-ecard">
                            <div className='broadcast-page'>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                <h1 className="page-title m-0">Broadcast</h1>
                                <div className="btn-wrapper">
                                    <Link to='/broadcast/add' className="btn btn-primary btn-sm mr-2">
                                        <Add className="fa fa-plus mr-1" />Add broadcast
                                    </Link>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => setFilterFlag(!filterFlag)}>
                                        <FilterFrames />
                                    </button>
                                </div>
                            </div>

                            {/* filter start  */}
                            {
                                filterFlag &&
                                <div id="filterSystemUser" class="card mb-3 filter-card" >
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between">
                                            <div class="row flex-fill">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Title" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <Select className='form-control addbroadcast_type'
                                                            placeholder='--'
                                                            options={typeOption}

                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-1">
                                                    <button type="submit" class="btn-primary btn btn-sm">Go</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            <div className='broadcastDataTable'>
                                <MDBDataTable
                                    className="listBroadcast"
                                    striped
                                    entries={5}
                                    hover
                                    data={data}
                                />
                            </div>
                            
                            {/* Delete Modal */}

                            <div>
                                <Modal show={show} onHide={() => setShow(false)} className='broadcast_delete'>
                                    <Modal.Header>
                                        <Modal.Title>Delete Confirm</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Do you really want to delete this broadcast ?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" className='delete_btn' onClick={() => setShow(false)}>
                                            Ok
                                        </Button>
                                        <Button variant="secondary" className='delete_btn' onClick={() => setShow(false)}>
                                            Cancel
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>

    </>;
}

export default Broadcast;
