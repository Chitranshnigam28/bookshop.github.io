import React from 'react';
import Card from './Card';
import { useState } from 'react';
import SData from './SData';

const NewArrivals = (props) => {
  {/*props.filterData("New Arrivals")*/}
  
  return <>
  
    <div className='container mt-5'>
            <div className='row'>
            {props.filteredData.map((ele)=>{
            
            return <Card key={ele.id} name={ele.name} img={ele.img} />
        })}
         </div>   
         </div>
  
  </>
  ;
};

export default NewArrivals;
