import React from 'react';
import Img from "./logo.png";
import "./Header.css";
import {NavLink,Route,Routes} from "react-router-dom";
import Body from './Body';
import Award from './Award';
import NewArrivals from './NewArrivals';
import { useState } from 'react';
import SData from './SData';
import Login from './Login';
import Register from './Register';

const Header = () => {

const [filterBy, setFilterBy] = useState({ category: "all" });
const [filteredData,setFilteredData]=useState(SData);
let filteredProducts = SData;

const filterData=(category)=>{
  setFilterBy(filterBy.category=category);
  /*console.log(category);
  console.log(filterBy);*/
if (filterBy.category === "Award") {
  
  filteredProducts = filteredProducts.filter((product) => product.category === filterBy.category); 
  setFilteredData(filteredProducts);
}
else if(filterBy.category==="New Arrivals"){
  console.log("Inside New Arrivals If "+filterBy.category);
  filteredProducts = filteredProducts.filter((product) => product.category === filterBy.category);
  setFilteredData(filteredProducts);
  
}

}
console.log("filteredData after  "+filteredData);  
  return (<div>
<nav className="navbar navbar-expand-md navbar-light bg-light">
<a className="navbar-brand" href="#"><img src={Img} alt="Logo" height="25px" width="25px"/>&nbsp;BookShop</a>
  <ul className="navbar-nav mx-auto">
    <li className="nav-item active text-center">
      <NavLink exact to="/" onClick={()=>filterData("All")}>Home </NavLink>
    </li>
    <li className="nav-item text-center">
    <NavLink exact to="/award" onClick={()=>filterData("Award")}>Award Winners</NavLink>
    </li>
    <li className="nav-item text-center">
    <NavLink exact to="/newarr" onClick={()=>filterData("New Arrivals")}>New Arrivals</NavLink>
    </li>
  </ul>
  <ul class="navbar-nav">
            <li class="nav-item">
            <NavLink exact to="/login" class="nav-link" >Login</NavLink>
            </li>
            <li class="nav-item">
            <NavLink exact to="/register" class="nav-link" >Register</NavLink>
            </li>
        </ul>
</nav>
<Routes>
    <Route exact path="/" element={<Body filteredData={filteredData}/>}/>
    <Route exact path="/award" element={<Award filteredData={filteredData} />}/>
    <Route exact path="/newarr" element={<NewArrivals filteredData={filteredData} />}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
</Routes>
  </div>);
};

export default Header;
