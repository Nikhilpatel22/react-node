import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Broker from '../../../assets/image/broker.png';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Helper from '../helper';
function Message() {
  function dropdownHandler(event, id) {
    Helper(event, id)
  }

  const [message, setMessage] = useState([
    {
      author: "Tarah Shropshire",
      time: "5 Mar",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      author: "Tarah Shropshire",
      time: "5 Mar",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      author: "Tarah Shropshire",
      time: "5 Mar",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      author: "Tarah Shropshire",
      time: "5 Mar",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    }
  ]);

  return <>
    <div className="dropdown comment drop-down-user ">
      <button className="btn comment-btn" onClick={(e) => dropdownHandler(e, "msg_menu")} type="button" id="dropdownMenuButton"
        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >
        <ChatBubbleOutlineIcon className='fa' />
        <span className="badge rounded-pill">8</span>
      </button>
      <div className="dropdown-menu notification p-0" id="msg_menu">
        <div className="topnav-dropdown-header">
          <span className="notification-title">Messages</span>
          <Link to className="clear-noti"> Clear All </Link>
        </div>
        <div className="noti-content">
          <ul className="notification-list">
            {
              message.map((item) => {
                return (
                  <div key={item}>
                    <li className="notification-message" >
                      <Link to='/'>
                        <div className="list-item d-flex align-items-center">
                          <div className="list-left">
                            <span className="list-img">
                              <img src={Broker} alt="" />
                            </span>
                          </div>
                          <div className="list-body">
                            <div className="d-flex justify-space-beteween">
                              <span className="message-author"> {item.author}</span>
                              <span className="message-time">{item.time}</span>
                            </div>
                            <div className="clearfix"></div>
                            <p className="message-content">{item.content}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </div>
                )
              })
            }

          </ul>
        </div>
        <div className="topnav-dropdown-footer">
          <Link to>View all Notifications</Link>
        </div>
      </div>
    </div>

  </>;
}

export default Message;
