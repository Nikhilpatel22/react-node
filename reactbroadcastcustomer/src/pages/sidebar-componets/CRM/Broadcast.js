import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import Navbar from '../../../components/navbar/Index'
import Sidebar from '../../../components/sidebar/Index';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from 'react-router-dom';
import Add from '@material-ui/icons/Add';
import Button from '@mui/material/Button';
import whatsapp from '../../../assets/image/whatsapp.png';
import Frame2 from '../../../assets/image/frames/frame2.png';
import Frame3 from '../../../assets/image/frames/frame3.png';
import outlook from '../../../assets/image/outlook.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip, IconButton } from '@mui/material';
import { Modal } from 'react-bootstrap'
import {TextField,MenuItem} from '@mui/material';
const Broadcast = () => {
    const data = {
        columns: [
            {
                label: '#',
                field: 'id',
                width: 200,
            },
            {
                label: 'Title',
                field: 'Title',
                sort: 'asc',
                width: 200,

            },
            {
                label: 'Broadcast Date & Time',
                field: 'BroadcastDateTime',
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
        rows: [
            {
                id: 1,
                Title: "Independence Day",
                BroadcastDateTime: "15/08/2021",
                Type: "Season Greetings",
                SelectTemplate: Frame2,
                Message: "This Independence Day let's take a pledge to protect the peace and unity of our great nation. Happy Independence Day!",
                Platforms: [whatsapp, outlook],
                ScheduleStatus: "Schduled",
                Senton: "15/08/2022",
                Action: "Edit Delete"
            },
            {
                id: 2,
                Title: "Achievement",
                BroadcastDateTime: '11/12/2021',
                Type: 'Exceptional achievments',
                SelectTemplate: Frame3,
                Message: "Congratulations {Tawheed Khan} on completing {10 years} at Gray Matrix. Here is us wishing you all the success in your life. #GrayMatrix #workanniversary #workcelebration #successs",
                Platforms: [whatsapp, outlook],
                ScheduleStatus: "sent",
                Senton: "11/12/2021",
                Action: "Edit Delete"
            }
        ]
    };

    const filterData = [
        { value: "data1", label: "Season Greetings" },
        { value: "data2", label: "Newly Wed wishes" },
        { value: "data3", label: "New born-girl wishes" },
        { value: "data4", label: "New born-boy wishes" },
        { value: "data5", label: "Exceptional achievments" },
        { value: "data6", label: "Job well done" }
    ]

    useEffect(() => {
        showTable()
    }, [data])

    const [deletemodel, setDeleteModel] = useState(false);
    const [filter, setFilter] = useState(false);

    const [filterdata, setFilterData] = useState('')

    const handleChange = (e)=>{
        setFilterData(e.target.value);
    }

    const showTable = () => {
        data.rows.map(tbl => {
            tbl.Title = (
                <div style={{ color: "#007bff" }}>
                    {tbl.Title}
                </div>
            )
            tbl.SelectTemplate = (
                <div className='template-show'>
                    <img src={Frame2} alt="template" />
                </div>
            )
            tbl.Platforms = (
                <div className='img-platforms d-flex'>
                    <img src={whatsapp} alt="platforms" />
                    <img src={outlook} alt="platforms" />
                </div>
            )
            tbl.Action = (
                <div className='d-flex justify-content-center'>
                    <Tooltip title="Edit Broadcast" >
                        <IconButton>
                            <Link to="/broadcast/edit"><EditIcon className='btn-action' style={{ marginBottom: "8px" }}/></Link>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete Broadcast">
                        <IconButton onClick={() => setDeleteModel(true)}>
                            <DeleteIcon className='btn-action' />
                        </IconButton>
                    </Tooltip>
                </div>
            )
            tbl.ScheduleStatus = (
                <div>
                    <h5 className={tbl.ScheduleStatus == "Schduled" ? "badge badge-warning" : "badge badge-success"}>{tbl.ScheduleStatus}</h5>
                </div>
            )
        })
    }

    return <>
        <Navbar />
        <div className="app-container wide overflow-auto" id="dashboard-main">
            <div className="sidebar-overlay"></div>
            <Sidebar />
            <div className='page-broadcast'>
                <div className='app-layout-wrapper'>

                    <div className="app-layout page-ecard">
                        <div className='broadcast-page'>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4>Broadcast</h4>
                                <div className='broadcast-add-btn'>
                                    <Link to='/broadcast/add' className='text-decoration-none'>
                                        <Button
                                            variant="contained"
                                            className='btn-add'
                                            color="primary"
                                            startIcon={<Add />}
                                        >
                                            Add broadcast
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="outlined"
                                        className='btn-filter'
                                        sx={{ ml: 2 }}
                                        startIcon={<FilterAltIcon />}
                                        onClick={() => setFilter(!filter)}
                                    >
                                    </Button>
                                </div>
                            </div>

                            {
                                filter &&
                                <div className='filter-main'>
                                    <div className='row'>
                                        <div class="col-md-3 mt-2">
                                            <TextField
                                                fullWidth
                                                required
                                                id="outlined-required"
                                                label="Title"
                                            />
                                        </div>
                                        <div class="col-md-3 mt-2">
                                            <TextField
                                                fullWidth
                                                select
                                                id="outlined-disabled"
                                                label="Type"
                                                value={filterdata}
                                                onChange={handleChange}
                                            >
                                            {filterData.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </div>
                                        <div className='col-1 go-btn mt-2'>
                                            <Button variant='contained' className='mt-2'>Go</Button>
                                        </div>
                                    </div>
                                </div>
                            }

                            <div className='datatable'>
                                <MDBDataTable
                                    striped
                                    entries={5}
                                    hover
                                    searching={false}
                                    data={data}
                                    borderless
                                    noBottomColumns
                                />
                            </div>
                            <div>
                                <Modal
                                    show={deletemodel}
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                    onHide={() => setDeleteModel(false)}
                                    size="sm"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            Delete Confirm
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Do you really want to delete this broadcast ?
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="contained" sx={{ backgroundColor: "#1A3D6B" }} onClick={() => setDeleteModel(false)}>Ok</Button>
                                        <Button variant="outlined" className='modal-btn' sx={{ ml: 2 }} onClick={() => setDeleteModel(false)}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Broadcast;
