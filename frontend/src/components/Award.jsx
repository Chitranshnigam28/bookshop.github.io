import React from 'react';
import SData from './SData';
import Card from './Card';


const Award = (props) => {
{/*props.filterData("Award");*/}
console.log("Inside award props"+props.filteredData);
return (<>

<div className='container mt-5'>
        
            <div className='row'>
            {props.filteredData.map((ele)=>{
            
            return <Card key={ele.id} name={ele.name} img={ele.img} />
        })}
         </div>   
         </div>
  </>);
};

export default Award;
