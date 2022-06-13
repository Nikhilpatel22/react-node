import React, { useEffect } from 'react';
import Login from '../pages/Login';
import Login1 from '../pages/login1';
import Index from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import Broadcast from '../pages/sidebar-componets/CRM/Broadcast';
import AddBroadcast from '../pages/sidebar-componets/CRM/AddBroadcast';
import EditBroadcast from '../pages/sidebar-componets/CRM/EditBroadcast';
import Vendors from '../pages/sidebar-componets/Accounts/Vendors';
import Customers from '../pages/sidebar-componets/Customers/Customers';
import AddCustomers from '../pages/sidebar-componets/Customers/AddCustomers';
import Address from '../pages/sidebar-componets/Customers/addresspage';
import Customerpage from '../pages/sidebar-componets/Customers/customerpage'
import Documentpage from '../pages/sidebar-componets/Customers/documentpage';

const PagesRoutes = [
    {
        path: '/login',
        component: <Login />,
        exact: true,
    },
    {
        path: '/login1',
        component: <Login1 />,
        exact: true,
    },
    {
        path: '/',
        component: <Index />,
        exact: true
    },
    {
        path: '/forgot_password',
        component: <ForgotPassword />,
        exact: true,
    },
    {
        path: '/broadcast',
        component: <Broadcast />,
        exact: true,
    },
    {
        path: '/broadcast/add',
        component: <AddBroadcast />,
        exact: true,
    },
    {
        path: '/broadcast/edit',
        component: <EditBroadcast />,
        exact: true,
    },
    {
        path: '/vendors/list',
        component: <Vendors />,
        exact: true,
    },
    {
        path: '/customers',
        component: <Customers />,
        exact: true,
    },
    {
        path: '/customers/add',
        component: <AddCustomers />,
        exact: true,
    }, 
    {
        path: '/customers/add/address',
        component: <Address />,
        exact: true,
    }, 
    {
        path: '/customers/add/customer',
        component: <Customerpage />,
        exact: true,
    },
    {
        path: '/customers/add/documents',
        component: <Documentpage />,
        exact: true,
    },
]
export default PagesRoutes;





