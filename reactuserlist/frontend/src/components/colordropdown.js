import { useState } from 'react';
import {Dropdown} from 'react-bootstrap'
import Select from 'react-select'
const Colordropdown = () => {
    var color =[
        {
            value:1,
            label:"red"
        },
        {
            value:2,
            label:"yellow"
        },{
            value:3,
            label:"blue"
        },{
            value:4,
            label:"green"
        },
    ];

    const [setbgcolor,bgvalue] = useState(color.label);
    const colorhandle = e =>{
        bgvalue(e.label)
    }
    return (
        <div className="color-main">
            <div className="color-dropdown">
                <style>{'body {background-color:'+setbgcolor+';}'}</style>
                <Select options={color} onChange={colorhandle} sty></Select>
                <center>
                    <b>the backgroun color is:{setbgcolor}</b>
                </center>
                    {/* <div style={{width:"400px",height:"200px",backgroundColor:"green",marginTop:"100px"}}>

                    </div>
 */}               
            </div>
            <div className="color-box">
            </div>
        </div>
    )
}

export default Colordropdown
