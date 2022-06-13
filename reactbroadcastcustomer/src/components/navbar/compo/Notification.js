import React, { useState, useEffect } from 'react';
import Broker from '../../../assets/image/broker.png';
import { Link } from 'react-router-dom';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Helper from '../helper';

function Notification() {

    function dropdownHandler(event, id) {
        Helper(event, id)
    }

    const [notification, setNotification] = useState([
        {
            name: "John Doe",
            activity: "added new task",
            title: "Patient appointment booking",
            time: "4 mins ago"
        },
        {
            name: "Tarah Shropshire",
            activity: "changed the task name ",
            title: "Appointment booking with payment gateway",
            time: "6 mins ago"
        },
        {
            name: "Misty Tison",
            activity: "added",
            title: "Patient appointment booking",
            time: "8 mins ago"
        }
    ]);

    return <>
        <div className="dropdown message drop-down-user">
            <button className="btn message-btn" onClick={(e) => dropdownHandler(e, "notification_menu")} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <NotificationsNoneIcon className="fa" />
                <span className="badge rounded-pill">3</span>
            </button>
            <div className="dropdown-menu notification p-0" id="notification_menu">
                <div className="topnav-dropdown-header">
                    <span className="notification-title">Notifications</span>
                    <Link to="/" className="clear-noti"> Clear All </Link>
                </div>

                <div className="noti-content">
                    <ul className="notification-list">
                        {
                            notification.map((noti, i) => {
                                return (
                                    <li className="notification-message" key={i}>
                                        <Link to="/">
                                            <div className="media d-flex">
                                                <span className="noti-img flex-shrink-0">
                                                    <img src={Broker} alt="" />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">{noti.name}</span> {noti.activity}<span className="noti-title">{noti.title}</span></p>
                                                    <p className="noti-time"><span className="notification-time">{noti.time}</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }


                    </ul>
                </div>
                <div className="topnav-dropdown-footer">
                    <Link to="/">View all Notifications</Link>
                </div>
            </div>
        </div>

    </>;
}

export default Notification;
