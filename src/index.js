import React from 'react';
import ReactDOM from 'react-dom/client';
import Vilangu from './vilangu';
import details from './details';
import "./style.css"


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <div className='main'>
    <h1>Love Animal</h1>
    <div className='head'>
    {details.map(
      function (vilangu){
      return <Vilangu image={vilangu.image} namee={vilangu.namee}  desc={vilangu.desc}/>
      }
      )}
    </div>
  </div>
);
