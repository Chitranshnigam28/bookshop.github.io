import React from 'react';
import Card from './Card';
import "./Body.css"
import SData from './SData';
const Body = (props) => {
   { /*console.log(props.filteredProducts);*/}
    return(<>
    <div className='container mt-5'>
        <h1 className='main-heading'>Best Books</h1>
            <div className='row'>
            {props.filteredData.map((ele)=>{
            
            return <Card key={ele.id} name={ele.name} img={ele.img}/>
        })}
         </div>   
         </div>
    
    </>);
  
};

export default Body;
