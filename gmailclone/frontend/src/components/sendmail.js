import React, { useState } from 'react';
import { Card, Button, Form } from "react-bootstrap"
import axios from 'axios'
import composelogo from '../image/pluscompose.png'
import { MdInbox } from "react-icons/md";
import {Link} from 'react-router-dom'
 import {useForm} from 'react-hook-form'

const Sendmail = () => {
    const [mail, setMail] = useState('');
    const [user, setUser] = useState(({
        to: "",
        subject: "",
        description: ""
    }));
    // const {register,handleSubmit}=useForm()
    const { to, subject, description,file } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    let formData = new FormData()
    const onfilechange = (e) =>{
        console.log("file",e.target.files[0])
        if(e.target && e.target.files[0]){
            formData.append('file',e.target.files[0])
       }
    //    console.log(formData)
    }
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    const Sendmail = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/sendmail1", user,formData,config)
        // await axios.post("http://localhost:8000/sendmail", user)
            .then(response => setMail(response.data.respMesg));
            
    }

    //  const Submit = async (data) =>{
    //         const formData = new FormData()
    //      formData.append("file",data.file[0])
    //  }

  
    return (
        <div>
            <div className='main-body'>
                <div className='sidebar'>
                    <Link to="/sendmail"> <button className='sidebar-compose'>
                        <img src={composelogo} alt="compose" />
                        <span style={{ paddingLeft: "5px" }}>Compose</span>
                    </button></Link>
                    <div className='sidebaroption sidebaroption-active'>
                        <span className='sidebar-icons'><MdInbox /></span>
                        <h3>Inbox</h3>
                    </div>
                </div>
                <div className='mailbox'>
                    <Card>
                        <Card.Header>new massage</Card.Header>
                        <Card.Body>
                            {/* <Card.Title>Special title treatment</Card.Title> */}
                            <p class="mb-3 mt-2" style={{ color: "green", marginLeft: "57px" }}><b>{mail}</b></p>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="To" onChange={onInputChange} value={to} name="to" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Subject" onChange={onInputChange} value={subject} name="subject" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} onChange={onInputChange} value={description} name="description" />
                                </Form.Group>
                                <input type="file" name="file" value={file} onChange={onfilechange} />
                            </Form>
                            <Button variant="primary" onClick={Sendmail}>Send Mail</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        {/* <div>
         <input type="file" name="file" onChange={onfilechange} />
        
        </div> */}





        </div>
    );
};

export default Sendmail;
