import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Accordion } from 'react-bootstrap';
import { getusers } from './getalldata';
import { Markup } from 'interweave';
import axios from 'axios'
import {Link} from 'react-router-dom'
import composelogo from '../image/pluscompose.png'
import { MdInbox } from "react-icons/md";


const Displaymail = () => {
    // const [getmail, setGetMail] = useState("")
    const [mailget, setMailGet] = useState([])
    const [getmail, setGetMail] = useState('')
    const { id } = useParams();

    // const {fhtml,thtml,html}=getmail
    console.log("id", id)

    useEffect(() => {
        loadUserDetails();
    }, [])
    const loadUserDetails = async () => {
        const response = await axios.get("http://localhost:8080/users/getgemail");
        console.log(response.data)
        const newData = response.data.find((u) => {
            return u.messageId === id
        })
        console.log("newdata", newData)
        setGetMail({
            // fhtml: newData.from.html,
            // thtml: newData.from.text,
            html: newData.html,
            date: newData.date,
            rtext: newData.replyTo.text,
            ttext: newData.to.text,
            subject: newData.subject
        })
    }
    console.log("data", getmail)
    const createMarkup = htmlString => ({ __html: htmlString });
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
                <div style={{flexDirection:"column"}}>
                    <div>{getmail.subject}</div>
                    {/* <div>{getmail.thtml}</div> */}
                    {/* <div>
                        <div dangerouslySetInnerHTML={createMarkup(getmail.fhtml)} />
                    </div> */}
                    <div>{getmail.date}</div>
                    <div>
                        <div><Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>to me</Accordion.Header>
                                <Accordion.Body>
                                    {/* <div style={{ display: "flex" }}><p style={{ fontWeight: 700 }}>form:</p> <p>{getmail.thtml}</p></div>*/}
                                    <div style={{ display: "flex" }}><p style={{ fontWeight: 700 }}>reply-to:</p> <p>{getmail.rtext}</p></div> 
                                    <div style={{ display: "flex" }}><p style={{ fontWeight: 700 }}>to:</p> <p>{getmail.ttext}</p></div>
                                    <div style={{ display: "flex" }}><p style={{ fontWeight: 700 }}>date:</p> <p>{getmail.date}</p></div>
                                    <div style={{ display: "flex" }}><p style={{ fontWeight: 700 }}>subject: </p><p>{getmail.subject}</p></div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                        <div dangerouslySetInnerHTML={createMarkup(getmail.html)} />
                        {/* <Markup content={getmail.textAsHtml} />  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Displaymail;
