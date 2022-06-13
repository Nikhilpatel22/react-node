import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AccountBox from '@material-ui/icons/AccountBox';
import WatchLater from '@material-ui/icons/WatchLater';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Settings from '@material-ui/icons/Settings';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LinkIcon from '@material-ui/icons/Link';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
function Sidebar() {
    const [menuList, setMenuList] = useState([
        {
            id: 'Manage',
            title: 'Manage',
            icon: <DashboardIcon className='fa' />,
            children: [
                {
                    id: 'roles',
                    title: 'Roles',
                    navLink: '/'
                },
                {
                    id: 'system user',
                    title: 'System User',
                    navLink: '/'
                }
            ]
        },
        {
            id: 'HRMS',
            title: 'HRMS',
            icon: <InsertDriveFileIcon className='fa' />,
            children: [
                {
                    id: 'Holidays',
                    title: 'Holidays',
                    navLink: '/'
                },
                {
                    id: 'Recruitment',
                    title: 'Recruitment',
                    navLink: '/',
                    grandChild: [
                        {
                            id: 'Manage Candidate',
                            title: 'Manage Candidate',
                            navLink: '/login'
                        },
                        {
                            id: 'Interview & Feedbacks',
                            title: 'Interview & Feedbacks',
                            navLink: '/'
                        },
                        {
                            id: 'Offers',
                            title: 'Offers',
                            navLink: '/'
                        },
                        {
                            id: 'Offer Calculator',
                            title: 'Offer Calculator',
                            navLink: '/'
                        }
                    ]
                },
                {
                    id: 'Policies',
                    title: 'Policies',
                    navLink: '/'
                },
            ]
        },
        {
            id: 'Accounts',
            title: 'Accounts',
            icon: <AccountBox className='fa' />,
            children: [
                {
                    id: 'Vendors',
                    title: 'Vendors',
                    navLink: '/vendors/list'
                },
                {
                    id: 'Vendor Contracts',
                    title: 'Vendor Contracts',
                    navLink: '/'
                },
                {
                    id: 'Projects',
                    title: 'Projects',
                    navLink: '/'
                },
                {
                    id: 'Project Cost Tracker',
                    title: 'Project Cost Tracker',
                    navLink: '/'
                },
                {
                    id: 'Employee Cost',
                    title: 'Employee Cost',
                    navLink: '/'
                }
            ]
        },
        {
            id: 'CRM',
            title: 'CRM',
            icon: <WatchLater className='fa' />,
            children: [
                {
                    id: 'Contacts',
                    title: 'Contacts',
                    navLink: '/'
                },
                {
                    id: 'Contact Events',
                    title: 'Contact Events',
                    navLink: '/'
                },
                {
                    id: 'Customers',
                    title: 'Customers',
                    navLink: '/'
                },
                {
                    id: 'Broadcast',
                    title: 'Broadcast',
                    navLink: '/broadcast'
                }
            ]
        },
        {
            id: 'My Zone',
            title: 'My Zone',
            icon: <PersonOutlineIcon className='fa' />,
            children: [
                {
                    id: 'My Leaves',
                    title: 'My Leaves',
                    navLink: '/'
                },
                {
                    id: 'My Timesheet',
                    title: 'My Timesheet',
                    navLink: '/'
                },
                {
                    id: 'Activities',
                    title: 'Activities',
                    navLink: '/'
                },
                {
                    id: 'Apps',
                    title: 'Apps',
                    navLink: '/'
                }
            ]
        },
        {
            id: 'Utilities',
            title: 'Utilities',
            icon: <BookmarkIcon className='fa' />,
            children: [
                {
                    id: 'URL Shortening',
                    title: 'URL Shortening',
                    navLink: '/'
                },
                {
                    id: 'Bookmarks',
                    title: 'Bookmarks',
                    navLink: '/'
                },
                {
                    id: 'eCards',
                    title: 'eCards',
                    navLink: '/'
                },
                {
                    id: 'Reminders',
                    title: 'Reminders',
                    navLink: '/'
                }
            ]
        },
        {
            id: 'Reports',
            title: 'Reports',
            icon: <LinkIcon className='fa' />,
            children: [
                {
                    id: 'Message Log',
                    title: 'Message Log',
                    navLink: '/'
                },
                {
                    id: 'Account Statement',
                    title: 'Account Statement',
                    navLink: '/'
                }
            ]
        },
        {
            id: 'Settings',
            title: 'Settings',
            icon: <Settings className='fa' />,
            children: [
                {
                    id: 'Change Password',
                    title: 'Change Password',
                    navLink: '/'
                }
            ]
        },
        {
            id: 'My Contracts',
            title: 'My Contracts',
            icon: <AttachMoneyIcon className="fa" />,
            children: [
                {
                    id: 'Contract Listing',
                    title: 'Contract Listing',
                    navLink: '/'
                },
                {
                    id: 'Contract Addendums',
                    title: 'Contract Addendums',
                    navLink: '/'
                }
            ]
        },
        {
            id: 'Customers',
            title: 'Customers',
            icon: <SupportAgentIcon className="fa" />,
            children: [
                {
                    id: 'Customers',
                    title: 'Customers',
                    navLink: '/customers'
                },
                {
                    id: 'Add Customers',
                    title: 'Add Customers',
                    navLink: '/customers/add'
                },
                {
                    id: 'Edit Customers',
                    title: 'Edit Customers',
                    navLink: '/'
                }
            ]
        },
    ]);
    const submenuHandler = ($event, id) => {
        if (Array.from($event.target.parentElement.classList).find(x => x == 'main-wrapper')) {
            var el = document.querySelector('.show');
            if (el) {
                el.classList.remove('show');
                if (el == document.getElementById(id)) {
                    document.getElementById(id).classList.remove('show')
                }
                else {
                    document.getElementById(id).classList.add('show')
                }
            }
            else {
                document.getElementById(id).classList.add('show');
            }

        }
    }
    const childHandler = id => {
        document.getElementById(id).classList.toggle("show");
    }
    
    useEffect(() => {
        let target = document.querySelector(".app-sidebar-nav");
        target.addEventListener("mouseover", mOver, false);
    }, []);

    function mOver() {
        let element = document.getElementById("body");
        element.classList.add("sidebar-open");
    }

    return <>
   
            <div id="appSidebarNav" className="app-sidebar-nav">
                <nav className="sidebar-navigation" >
                    <div className="navigation-scrollable">
                        <ul className="nav menu">
                            {
                                menuList.map((menu, index) => {
                                    return (
                                        <li className="main-wrapper menu-item  has-submenu-item menu-manage" onClick={(e) => submenuHandler(e, menu.id)} key={index}>
                                            <Link className="main-wrapper menu-link toggle-sub-menu openbtn" to data-toggle="collapse">
                                                {menu.icon}
                                                <span className="menu-title">{menu.title}</span>
                                            </Link>
                                            <div className="collapse collapsed-sub-menu" id={menu.id} >
                                                <ul>
                                                    {
                                                        menu.children.map((child,item) => {
                                                            return (
                                                                <>
                                                                    {
                                                                        child.grandChild ?

                                                                            <li key={item}className="menu-item has-submenu-item menu-manage" >
                                                                                <Link className="menu-link toggle-sub-menu toggle-sub-submenu openbtn" to data-toggle="collapse" onClick={() => childHandler(child.id)}>{child.title}
                                                                                </Link>
                                                                                <div className="collapse open-down-btn collapsed-sub-submenu" id={child.id} >{
                                                                                    child.grandChild.map((grandchild, keys) => {
                                                                                        return (
                                                                                            <>
                                                                                                <ul key={keys} className="sub-submenu">
                                                                                                    <li className="menu-roles">
                                                                                                        <Link to>{grandchild.title}</Link>
                                                                                                    </li>
                                                                                                </ul>

                                                                                            </>
                                                                                        )

                                                                                    })
                                                                                }
                                                                                </div>
                                                                            </li>
                                                                            :
                                                                            <li className="menu-roles">
                                                                                <Link to={child.navLink}>{child.title}</Link>
                                                                            </li>

                                                                    }
                                                                </>
                                                            )

                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>

        

    </>;
}

export default Sidebar;
