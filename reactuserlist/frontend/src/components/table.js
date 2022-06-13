import React, { useEffect, useState } from "react";

var list = []

function BindTable({ }) {
  const [row, setRow] = useState(0);
  const [collumn, setCollumn] = useState(0);
  const [row1, setRow1] = useState();
  const [coll1, setColl1] = useState();
  const [row2, setRow2] = useState();
  const [coll2, setColl2] = useState();
  // const [list, setList] = useState([]);
  const [result, setResult] = useState(0)

  useEffect(() => {
    console.log(row, 'row')
    console.log(collumn, 'collumn')
  }, [row, collumn])

  const onValueChange = (rindex, cindex, e) => {
    e.preventDefault();

    console.log(rindex, cindex);

    if(list.length > 0) {
      var IsElementExist = list.filter(r => r.row == rindex && r.col == cindex);
      if (IsElementExist.length > 0) {
        var i = list.indexOf(IsElementExist[0]);
        list.splice(i, 1);
      }
    }
    
    let obj = {
      row: rindex,
      col: cindex,
      val: e.target.value
    };

    list.push(obj);
    console.log(list)
    console.log(list.length)

    if (list.length === 1) {
      setRow1(rindex)
      setColl1(cindex)
    }
    else {
      setRow2(rindex)
      setColl2(cindex)
    }
  }

  // const Plus = () =>{
  //   var result = list.map(x=> x.val).reduce((a, b) => Number(a) + Number(b))
  //   console.log(result)   
  //   setResult(result)    
  // }
  //  const Minus = () =>{
  //    var result = list.map(x=> x.val).reduce((a, b) => Number(a) - Number(b))
  //   console.log(result) 
  //   setResult(result)
  //  }
  //  const Multiplication = () =>{
  //   var result = list.map(x=> x.val).reduce((a, b) => Number(a) * Number(b))
  //   console.log(result) 
  //   setResult(result)
  //  }
  //  const Division = () =>{
  //   var result = list.map(x=> x.val).reduce((a, b) => Number(a) / Number(b))
  //   console.log(result) 
  //   setResult(result)
  //  }

  const Calculate = (e) =>{
    if(e.target.value === '+')
    {
      var result = list.map(x=> x.val).reduce((a, b) => Number(a) + Number(b))
      console.log(result)   
      setResult(result)    
    }
    else if(e.target.value === '-')
    {
      var result = list.map(x=> x.val).reduce((a, b) => Number(a) - Number(b))
      console.log(result)   
      setResult(result)    
    }
    else if(e.target.value === '*')
    {
      var result = list.map(x=> x.val).reduce((a, b) => Number(a) * Number(b))
      console.log(result)   
      setResult(result)    
    }
    else 
    {
      var result = list.map(x=> x.val).reduce((a, b) => Number(a) / Number(b))
      console.log(result)   
      setResult(result)    
    }
  }
  return (
    <div className="App">
      <div className="number-inputs">
        <input
          type="number"
          value={row}
          onChange={(e) => setRow(e.target.value)}
        />
        <input
          type="number"
          value={collumn}
          onChange={(e) => setCollumn(e.target.value)}
        />
      </div>
      <table>
        <tbody>
          <thead>
            {new Array(Number(row)).fill().map((row, rindex) => {
              return (
                <tr key={rindex}>
                  {new Array(Number(collumn)).fill().map((col, cindex) => {
                    return <td key={cindex}>r{rindex.toString()}-c{cindex.toString()}
                      <input
                        type="number"
                        onChange={(e) => onValueChange(rindex, cindex, e)}
                      />
                    </td>
                  })}
                </tr>
              )
            })
            }
            {/* <button onClick={(e) => Autofill(e)}>Autofill</button> */}
          </thead>
          <div>
            <tbody>
              <label>Row 1</label>
              <input type="number" value={row1} />
              <label>Col 1</label>
              <input type="number" value={coll1} />
              <label>Row 2</label>
              <input type="number" value={row2} />
              <label>Col 2</label>
              <input type="number" value={coll2} />
              <select onChange={Calculate}>
                <option>Selected</option>
                <option>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
              </select>
              {/* <button onClick={Plus}> + </button>
              <td></td>
              <button onClick={Minus}> - </button>
              <td></td>
              <button onClick={Multiplication}> * </button>
              <td></td>
              <button onClick={Division}> / </button>
              <td></td> */}
            </tbody>
          </div>
        </tbody>
      </table>
      <div>
        Total
        <input type="number" value={result}/>
      </div>
    </div>
  );
}

export default BindTable