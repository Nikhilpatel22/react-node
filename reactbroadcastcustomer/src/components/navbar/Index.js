import React from 'react';
import Menu from './compo/Menu';
import Language from './compo/Language';
import Message from './compo/Message';
import Notification from './compo/Notification';
import Settings from './compo/Settings';

function index() {
    return <>
        <div className="app-header" >
            <nav className="navbar navbar-light mobile-header">
                <div className="container-fluid p-0">
                    <Menu />
                    <div className="profile-container">
                        <Language />
                        <Notification />
                        <Message />
                        <Settings />
                    </div>
                </div>
            </nav>
        </div>

    </>;
}

export default index;
