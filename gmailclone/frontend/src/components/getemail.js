import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom";
import composelogo from '../image/pluscompose.png'
import { MdInbox } from "react-icons/md";
import { getUsers } from './getalldata'
// import {writeJsonFile} from 'write-json-file';
import allmail from '../allmail.json'
//  var fs = require('fs');
// const jsonfile = require('jsonfile')

// import fs required 'fs';



function Getemail() {
    const [mail, setMail] = useState([])
    const [data, setData] = useState('');

    useEffect(() => {
        // const url = "https://jsonplaceholder.typicode.com/posts";
        // const url2 = "http://localhost:8080/users/aa";

        //  axios.get(url2).then(res =>setMail(res)).catch(error => console.log(error));
        //    let data = await fetch(url2);
        //    let parsedata = await data.json()
        //    console.log(parsedata)
        // getMail()
        // console.log(mail)
        //getAllMail();
        const url3 = "http://localhost:8080/users/getgemail";
        fetch(url3).then((result) => {
            result.json().then(async (resp) => {
                // console.warn(resp)
                let data1 = JSON.stringify(resp);
                // const obj = { name: 'JP' }
                // let data2 = JSON.parse(data1)
                // setData(data2);
                // console.log("data",data)
                // console.log(data1)
                setMail(resp)
                console.log(resp)
                // allmail.writeFile(allmail, data)
                //     .then(res => {
                //         console.log('Write complete')
                //         console.log(res)
                //     })
                //     .catch(error => console.error(error))
                // await writeJsonFile(allmail, data);
                // setMail(data)
                // console.log(data);
                // // console.log(mail)
                // allmail.writeFile('allmail', data);

                //    fs.writeFile(allmail, data) 

                //    fs.writeFile('allmail.json', data, err => {
                //     // error checking
                //     if(err) throw err;

                //     console.log("New data added");
                // });   
            })

        })
    }, [])
    return (
        <div>
           
            <div className='main-body'>
                <div className='sidebar'>
                   <Link to="/sendmail"> <button className='sidebar-compose'>
                        <img src={composelogo} alt="compose" />
                        <span style={{ paddingLeft: "5px" }}>Compose</span>
                    </button>
                    </Link>
                    <div className='sidebaroption sidebaroption-active'>
                        <span className='sidebar-icons'><MdInbox /></span>
                        <h3>Inbox</h3>
                    </div>
                </div>
                {/* <div>
                {
                    mail.map((ml, index) => (
                        <div className='email-list'>
                            <h3 className='email-row-title'><Link to={`/displaymail/${ml.messageId}`} class="text-decoration-none" style={{color:"black"}}>{ml.from.value[0].name}</Link></h3>
                            <div className='email-row-massage'>
                                <h4><Link to={`/displaymail/${ml.messageId}`} class="text-decoration-none" style={{color:"black"}}>{ml.subject}</Link></h4>
                            </div>
                        </div>
                    ))
                }
                </div> */}
                 <Table striped bordered hover>
                {/* <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                           mail.slice(0).reverse().map((ml,index)=>(
                               <tr key={index}>
                               <td style={{cursor:"pointer"}} > <Link to={`/displaymail/${ml.messageId}`} class="text-decoration-none" style={{color:"black"}}>{ml.from.value[0].name}</Link></td>
                               <td style={{cursor:"pointer"}}><Link to={`/displaymail/${ml.messageId}`} class="text-decoration-none" style={{color:"black"}}>{ml.subject}</Link></td>
                               </tr>
                           ))
                       }
                </tbody>
            </Table>
            </div>


        </div>);
};

export default Getemail;
