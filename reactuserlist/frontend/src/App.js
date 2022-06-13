import React from 'react';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contactus';
import Navbar from './components/layout/navbar';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import NotFound from './components/notfound';
//import { addUser } from './components/getAlluser';
import addUser from "./components/addUser";
import editUser from './components/editUser';
import loginUser from './components/login';
import about from './components/about';
import sendMail from './components/sendmail';
import webcam from './components/webcam';
import forgetpassword from './components/forgetpassword';
import resetpassword from './components/ResetPassword';
import calculation from './components/calculation';
import table from './components/table';
import cell from './components/cell';
import pattern from './components/pattern';
import calculator  from './components/calculator';
import Colordropdown from './components/colordropdown';
import Formarraytask from './components/formarraytask';
import Updatearray from './components/updatearray';
import  Checkbox  from './components/checkbox';
import Formlist from './components/formlist';
import Insurancepolicy from './components/insurancepolicy';
import Example from './components/example';
import Example2 from './components/example2';
import Example1 from './components/example1';
import Example3 from './components/example3';
import Example4 from './components/example4';
import Example5 from './components/example5';
import Charts from './components/charts/charts';
import Linecharts from './components/charts/linecharts';
import Barcharts from './components/charts/barcharts';
import Piecharts from './components/charts/piecharts';
import Chartsjss from './components/charts/chartsjs'
import Linewintercharts from './components/charts/linewintercharts';
import UsertList from './components/userlist/userlist'
import Userpolicylist2 from './components/userlist/userpolicylist';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div class="App">
       {/* <Navbar/> */}
      <Switch>  
        <Route exact path="/" component={Home}/>
        <Route exact path="/adduser" component={addUser}/>
        <Route exact path="/edituser/:id" component={editUser}/>
        <Route exact path="/loginuser" component={loginUser}/>
        <Route exact path="/about" component={about}/>
        <Route exact path="/sendmail" component={sendMail}/>
        <Route exact path="/webcam" component={webcam}/>
        <Route exact path="/forgetpassword" component={forgetpassword}/>
        <Route exact path="/resetpassword" component={resetpassword}/>
        <Route exact path="/calculation" component={calculation}/>
        <Route exact path="/table" component={table}/>
        <Route exact path="/cell" component={cell}/>
        <Route exact path="/pattern" component={pattern}/>
        <Route exact path="/calculator" component={calculator}/>
        <Route exact path="/colordropdown" component={Colordropdown}/>
        <Route exact path="/formarraytask" component={Formarraytask}/>
        <Route exact path="/updatearray/:id" component={Updatearray}/>
        <Route exact path="/checkbox" component={Checkbox}/>
        <Route exact path="/formlist" component={Formlist}/>
        <Route exact path="/insurancepolicy" component={Insurancepolicy}/>
        <Route exact path="/example" component={Example} />
        <Route exact path="/example1" component={Example1} />
        <Route exact path="/example2" component={Example2} />
        <Route exact path="/example3" component={Example3} />
        <Route exact path="/example4" component={Example4} />
        <Route exact path="/example5" component={Example5} />
        <Route exact path="/charts" component={Charts} />
        <Route exact path="/linecharts" component={Linecharts}/>
        <Route exact path="/barcharts" component={Barcharts}/>
        <Route exact path="/piecharts" component={Piecharts}/>
        <Route exact path="/chartsjs" component={Chartsjss}/>
        <Route exact path="/linewintercharts" component={Linewintercharts} />
        <Route exact path="/userlist" component={UsertList} />
        <Route exact path="/userpolicylist" component={Userpolicylist2} />
        <Route  component={NotFound}/>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
