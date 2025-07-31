import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Movierule from './Movie';
import DataObj from './Movielist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className="container">
  <h1 className="text-center">Rajesh Cinemalu</h1>
  <div style={{display:'flex'}}>
  {DataObj.map(dt=>{
  return   <Movierule title={dt.title} img={dt.image} descp={dt.desc} prices={dt.price} stars={dt.star}/>
  })}


</div>
</div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
