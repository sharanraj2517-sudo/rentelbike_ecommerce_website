import React from "react";
import Footer from "./Footer";

function Bikes(){


  return(
    <>
    <div>
      <image>
        <source 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7G2vsjBXwU2PHRS_uCI1HqGVAD1eo6u6SYR9CnwjRa9Of5tZmMe29GV0&s"
        />
        </image>
    </div>
    <div>
      <div className="form-group">
          <label>Select City</label>
          <select className="input">
            <option>Select City</option>
            <option>Mumbai</option>
            <option>Chennai</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
          </select>

          <div className="form-group">
          <label>Select Categories</label>
          <select className="input">
            <option>Select Category</option>
            <option>Geared</option>
            <option>Non-Geared</option>
            <option>Sports</option>
          </select>
        </div>

         <div className="form-group">
          <label>Pick Up</label>
          <input type="datetime-local" className="input" />
        </div>

        <div className="form-group">
          <label>Return</label>
          <input type="datetime-local" className="input" />
        </div>

        <button className="search-btn">SEARCH BIKES</button>



        </div>

        
    </div>
    
    <Footer />
    </>


  )
}
export default Bikes;