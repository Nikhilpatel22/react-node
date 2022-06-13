import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';


const Charts = () => {
    return (
        <div>
            <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/linecharts"}>linecharts</Button>
            <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/barcharts"}>barcharts</Button>  
            <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/piecharts"}>piecharts</Button> 
            <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/chartsjs"}>Charts js</Button>
            <Button color="primary" variant="contained" style={{marginleft:10}} component={Link} to={"/linewintercharts"}>Linewinter charts</Button>
        </div>
    )
}

export default Charts
