import React from 'react';
import composelogo from '../image/pluscompose.png'
import { MdInbox } from "react-icons/md";


const Mail = () => {
    return (
        <div className='main-body'>
            <div className='sidebar'>
                <button className='sidebar-compose'>
                    <img src={composelogo} alt="compose" />
                    <span style={{ paddingLeft: "5px" }}>Compose</span>
                </button>
                <div className='sidebaroption sidebaroption-active'>
                    <span className='sidebar-icons'><MdInbox /></span>
                    <h3>Inbox</h3>
                </div>
            </div>
            <div className='email-list'>
                <h3 className='email-row-title'>Quora Digest</h3>
                <div className='email-row-massage'>
                    <h4>I never check my 12-year-old daughter’s phone. She is always with me so there is no n...?</h4>
                </div>
            </div>
        </div>
    );
};

export default Mail