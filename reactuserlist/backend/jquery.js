import React,{ useState } from "react";
import ReactDOM from "react-dom";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import $ from 'jquery';
import { Link } from 'react-router-dom';
//import "./styles.css";

function Calculation() {

 const [row, setRow] = useState();
 const [collumn, setCollumn] = useState();  
 const [table,setTable] = useState();

function bind(){
    setTable(row + collumn);
}


  return (
    <div className="App">
      <div className="number-inputs">
        <input
          type="number"
          value={row}
          onChange={(e) => setRow(+e.target.value)}
         
        />
        <input
          type="number"
          value={collumn}
          onChange={(e) => setCollumn(+e.target.value)}
        />
      </div>
      <button onClick={bind}>Bind </button>

      <div>
    <label>Row 1</label>
    <input type="number"  />
    <label>Col 1</label>
    <input type="number" />
    <label>Row 2</label>
    <input type="number" />
    <label>Col 2</label>
    <input type="number" />
    <input type="hidden" id="val1" />
    <input type="hidden" id="val2" />
    <select>
        <option value="select">Select</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
 
</div>
    </div>
  );
}


 export default Calculation