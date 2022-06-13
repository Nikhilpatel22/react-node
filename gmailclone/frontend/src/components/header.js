import React from 'react';
import logo from '../image/logo.png'
import { HiMenu } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { AiFillCaretDown } from "react-icons/ai";
import { GrApps } from "react-icons/gr";
import { MdNotificationsActive, MdSettings } from "react-icons/md";
import { RiAccountCircleFill, RiMenuAddLine } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <span className='material-icons'><HiMenu /></span>
                <img src={logo} alt="logo" />
            </div>
            <div className='header-middle'>
                <span className='material-icons'><BiSearch /></span>
                <input type="text" placeholder='Search Mail' />
                <span className='material-icons'><RiMenuAddLine /></span>
            </div>
            <div className='header-right'>
                <span className='material-icons'><BsFillQuestionCircleFill /></span>
                <span className='material-icons'><MdSettings /></span>
                <span className='material-icons'><GrApps /></span>
                <span className='material-icons'><RiAccountCircleFill /></span>
            </div>
        </div>
    );
};

export default Header;
