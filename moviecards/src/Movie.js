import React from 'react';
import './Movie.css';
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Movierule(props){
  return(
<div className="card" style={{width:'250px',padding:'10px'}}>
  <h3 className="text-center">{props.title}</h3>
<img src={props.img} alt="str" width="210px" height="220px"/>
<p className="edit1">{props.descp}</p>
<button type="submit" className="btn btn-primary">ADD CART</button>
<div className="desc">
<h6 className="price">{props.prices}</h6>
<h4 className="star">{props.stars}</h4>
</div>
</div>
);
}
export default Movierule;
