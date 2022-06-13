import React, { useEffect, useState } from 'react';
import HeaderLogo from '../../../assets/image/head-logo.png';
import { Link } from 'react-router-dom';

function Menu() {

    const menuHandler = () => {
        let element = document.getElementById("body");
        if (element.classList.contains("sidebar-open")) {
            element.classList.remove("sidebar-open");
        }
        else {
            element.classList.add("sidebar-open");
        }
    }
    return <>
        <div className="navbar-header">
            <div className="app-logo">
                <Link className="logo-link" to='/'>
                    <img src={HeaderLogo} alt="Talkk Bubble Logo" className="img-responsive" style={{ width: "45px", height: "32px" }}
                    />
                </Link>
            </div>
            <div id="sidebar-toggle" className="nav-switch pull-left toggle-menu" onClick={menuHandler}>
                <div className="line-bg-wrapper">
                    <span className="line-bg first"></span>
                    <span className="line-bg second"></span>
                    <span className="line-bg last"></span>
                </div>
            </div>
            <div className="navbar-brand">
                <p id="appTitle" className="app-title">INSIGHT</p>
            </div>
        </div>
    </>;
}

export default Menu;
