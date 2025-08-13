import React,{ useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Movierule from './Movie';
import DataObj from './Movielist';
import Search from './Search';



function App(){
const [text,setText]= useState(" ");
const [issearch,isSearched]=useState(false);

function handler(query){
  setText(query);
  isSearched(true);
}

const filtermovies=DataObj.filter(dt =>dt.title.toLowerCase()===text.toLowerCase());
let movietoshow;
if(!issearch){
  movietoshow=DataObj;
}
else if(filtermovies.length > 0){
  movietoshow=filtermovies;
}
else{
  movietoshow=DataObj;
}
return(
  <div className="container">
  <h1 className="text-center kingu">Rajesh Movies</h1>

  <Search onSearch={handler}/>

  <div style={{display:'flex'}}>
  {movietoshow.map(dt=>{
  return   <Movierule title={dt.title} img={dt.image} descp={dt.desc} prices={dt.price} stars={dt.star}/>
  })}


</div>
</div>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
