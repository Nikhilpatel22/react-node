import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Broker from '../../../assets/image/broker.png';
import Helper from '../helper';

function Settings() {
    function dropdownHandler(event, id) {
        Helper(event, id)
    }

    return <>
        <div className="dropdown user-avatar drop-down-user">
            <Link className="avaTar" to onClick={(e) => dropdownHandler(e, "profile_menu")} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={Broker} alt="" style={{ width: "40px" }} />
                <span className="status-on"></span>
                <span className="user-text pl-2">Admin</span>
            </Link>

            <div className="dropdown-menu drop-down-left dropdown-lang" aria-labelledby="dropdownLang" id="profile_menu">
                <Link className="dropdown-item " to>
                    My profile </Link>
                <Link className="dropdown-item" to>
                    Settings</Link>
                <Link className="dropdown-item" to>
                    Logout</Link>
            </div>
        </div>
    </>;
}

export default Settings;
