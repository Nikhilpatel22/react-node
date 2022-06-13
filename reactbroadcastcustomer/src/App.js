import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from './router/routes';
import './App.scss'; 
function App() {
  return <>
  <section className='app-layout'>
    <BrowserRouter>
      <Routes>
        {
          routes.map((pages,i) => {
            return (
              <Route path={pages.path} exact element={pages.component} key={i}/>
            )
          })
        }
      </Routes>
    </BrowserRouter>
    </section>
  </>;
}
export default App;
