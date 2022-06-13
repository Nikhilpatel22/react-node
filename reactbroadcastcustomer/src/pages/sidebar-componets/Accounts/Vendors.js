import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import Navbar from '../../../components/navbar/Index'
import Sidebar from '../../../components/sidebar/Index';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from 'react-router-dom';
import Add from '@material-ui/icons/Add';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip, IconButton } from '@mui/material';
import { Modal } from 'react-bootstrap'
import { TextField, MenuItem } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';

const Vendors = () => {
    const data = {
        columns: [
            {
                label: '#',
                field: 'id',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Vendors name',
                field: 'Vendorsname',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Vendors type',
                field: 'Vendorstype',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Communication address',
                field: 'Communicationaddress',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Contact persons',
                field: 'Contactpersons',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Type of Business',
                field: 'TypeofBusiness',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Action',
                field: 'Action',
                sort: 'asc',
                width: 100
            }
        ],
        rows: [
            {
                id: 1,
                Vendorsname: 'Tawheed Khan',
                Vendorstype: 'Company',
                Communicationaddress: '138 Nirman Estate Link Road Behind Fire Brigade Chincholi Malad , Mumbai,Mumbai,400064,India',
                Contactpersons: {
                    cname: 'Saurabh Basak',
                    cemail: 'saurabh.bhasak@yopmail.com',
                    ccontact: '+91 5849146709'
                },
                TypeofBusiness: 'Manufacturer'
            },
            {
                id: 2,
                Vendorsname: 'Manpreet Ramanathan',
                Vendorstype: 'Partnership',
                Communicationaddress: 'A6 Girikunj Industrial Est Andherichakala Andheri , Mumbai,Mumbai,400093,India',
                Contactpersons: {
                    cname: 'Sushant Choudhary',
                    cemail: 'sushant.choudhary@yopmail.com',
                    ccontact: '+91 7352678822'
                },
                TypeofBusiness: 'Distributor Service Provider'
            },
            {
                id: 3,
                Vendorsname: 'Malik Arora',
                Vendorstype: 'Trust',
                Communicationaddress: 'Flat No 26 Sai Puja Apartment Nehru Rd Nr Jalaram Mandir Dombivli, Mumbai,Mumbai,421201,India',
                Contactpersons: {
                    cname: 'Anil Wagle',
                    cemail: ' anil.wagle@arora.com',
                    ccontact: '+91 7352678822'
                },
                TypeofBusiness: 'Distributor Service Provider'
            },
            {
                id: 4,
                Vendorsname: 'Nirmal Jaggi',
                Vendorstype: 'Company',
                Communicationaddress: 'Lalsingh Mansingh Bldg. Cst, Mumbai,Mumbai,400002,India',
                Contactpersons: {
                    cname: 'Kishor Dube',
                    cemail: 'kishor.dube@arora.com',
                    ccontact: '+91 7208942617'
                },
                TypeofBusiness: 'Manufacturer'
            },
            {
                id: 5,
                Vendorsname: 'Rajesh Malhotra',
                Vendorstype: 'Individual',
                Communicationaddress: 'F-1 Shop No 12 Sector 9 Near Shabari Hotel Vashi Navi Mumbai, Mumbai,Mumbai,400703,India',
                Contactpersons: {
                    cname: 'Rakesh Bothra',
                    cemail: 'rakesh.bothra@gmail.com',
                    ccontact: '+91 8927561461'
                },
                TypeofBusiness: 'Distributor Service Provider'
            },
        ]
    };

    const filterData = [
        { value: "Company", label: "Company" },
        { value: "Partnership", label: "Partnership" },
        { value: "IndividualProprietorship", label: "Individual (Proprietorship)" },
        { value: "HUF", label: "HUF" },
        { value: "Trust", label: "Trust" },
        { value: "AOPTrust", label: "AOP (Trust)" },
        { value: "LocalAuthority", label: "Local Authority" }
    ]

    useEffect(() => {
        showData()
    }, [data])


    const [deletemodel, setDeleteModel] = useState(false);
    const [filter, setFilter] = useState(false);
    const [filterdata, setFilterData] = useState('')

    const handleChange = (e) => {
        setFilterData(e.target.value);
    }




    const showData = () => {
        data.rows.map((dt) => {
            dt.Contactpersons = (
                <>
                    <div><PersonOutlineIcon style={{ width: "20px" }} /> {dt.Contactpersons.cname}</div>
                    <div><MailOutlineIcon style={{ width: "20px" }} /> {dt.Contactpersons.cemail}</div>
                    <div><CallIcon style={{ width: "20px" }} /> {dt.Contactpersons.ccontact}</div>

                </>
            )
            dt.Action = (
                <div className='d-flex justify-content-center'>
                    <Tooltip title="View Details" >
                        <IconButton>
                            <VisibilityIcon className='btn-action' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit Broadcast" >
                        <IconButton>
                            <Link to="/broadcast/edit"><EditIcon className='btn-action' style={{ marginBottom: "8px" }} /></Link>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete Broadcast">
                        <IconButton onClick={() => setDeleteModel(true)}>
                            <DeleteIcon className='btn-action' />
                        </IconButton>
                    </Tooltip>
                </div>
            )
        })
    }



    return <>
        <Navbar />
        <div className="app-container wide overflow-auto" id="dashboard-main">
            <div className="sidebar-overlay"></div>
            <Sidebar />
            <div className='pContactpersons-broadcast'>
                <div className='app-layout-wrapper'>

                    <div className="app-layout pContactpersons-ecard">
                        <div className='broadcast-pContactpersons'>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4>Vendors</h4>
                                <div className='broadcast-add-btn'>
                                    <Link to='/broadcast/add' className='text-decoration-none'>
                                        <Button
                                            variant="contained"
                                            className='btn-add'
                                            color="primary"
                                            startIcon={<Add />}
                                        >
                                            Add Vendors
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
                            <div>
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
                            </div>
                            <div className='datatable'>
                                <MDBDataTable
                                    //   striped
                                    bordered
                                    //   small
                                    data={data}
                                    noBottomColumns
                                    searching={false}
                                // scrollX={true}
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
export default Vendors;