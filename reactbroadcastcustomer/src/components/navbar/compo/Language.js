import React, { useState, useEffect } from 'react';
import Us from '../../../assets/image/us.png';
import De from '../../../assets/image/de.png';
import Es from '../../../assets/image/es.png';
import Fr from '../../../assets/image/fr.png';
import { Link } from 'react-router-dom';
import Helper from '../helper';
function Language() {


    function dropdownHandler(event, id) {
        Helper(event, id)
    }

    return <>

        <div className="dropdown user-avatar drop-down-user">
            <Link to className="btn avaTar" onClick={(e) => dropdownHandler(e, "language_menu")} role="button" id="dropdownLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={Us} alt="" style={{ width: "20px" }} />
                <span className="user-text">English</span>
            </Link>
            <div className="dropdown-menu drop-down-left dropdown-lang" aria-labelledby="dropdownLang" id="language_menu">
                <Link to className="dropdown-item">
                    <img src={Fr} alt="" style={{ width: "20px" }} />
                    <span className="flag-name"> French </span> </Link>
                <Link to className="dropdown-item">
                    <img src={Es} alt="" style={{ width: "20px" }} />
                    <span className="flag-name">Spanish </span></Link>
                <Link to className="dropdown-item" >
                    <img src={De} alt="" style={{ width: "20px" }} />
                    <span className="flag-name"> Germany </span></Link>
            </div>
        </div>
    </>;
}

export default Language;
