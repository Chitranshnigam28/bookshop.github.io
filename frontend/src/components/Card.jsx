import React from 'react';
import "./Card.css";

const Card = (props) => {
    
  
  return (<>
  
   { /*<div className="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
  
  <div className='row'>*/ }
      <div className='col-4'>
      <div className='grid-container'>
      <div className="card" class="grid-item"  key={props.key} style={{width: "18rem"}}>
  <img src={props.img} className="card-img-top" alt="..." style={{width: "18rem",height:"20rem"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    
    <a href="#" className="btn btn-primary">Shop</a>
  </div>
</div>
</div>
</div>
{/*
</div>
</div>
  </div>
  
 </div>*/}
<br/>
</>
  );
};

export default Card;
