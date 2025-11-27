import React from "react";
import "./Bikes.css";
import Footer from "./Footer";

function Bikes() {


  return (
    <>
      <div className="img">
        <image>
          <source
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7G2vsjBXwU2PHRS_uCI1HqGVAD1eo6u6SYR9CnwjRa9Of5tZmMe29GV0&s"
          />
        </image>
      </div>
      <div className="search fiels"> 
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

 <div>
  <div>
    <image>
      <source
      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bikewale.com%2Fbajaj-bikes%2Fplatina-100%2F&psig=AOvVaw0me-IXrOuczX8XCQ3_QZUI&ust=1764313692234000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKjUmenikZEDFQAAAAAdAAAAABAJ" 
      />
      <h3>Platina</h3>
       </image>
  </div>
  <div>
    <p>Available City : Tirupur   Number of Gears : 4 gears   Helmet Provide Company : Yes   Fuel : Yourself   Insurance Policy : Yes   Original Needed Proof : Yes   Xerox Needed Proof : No   Rented Bikes Delivery at your Place : near by tirupur   Rs 1000/- for Security deposit Pay at time of pickup the bike : Yes   Customer is liable to pay In case of damage to the vehicle : Yes   KM Per day Limit : 250 km   Extra helmet Provide Company : Yes   Extra km charges : Rs 4/- per km   Model : 2017   Extra hourly charges : 70/- per hour   Deliver at your place : If Available   </p>
    <button>BOOK A BIKE</button>
    <button>VEIW DETAILS</button>
  </div>
  <div>
    <h3>₹ 236.00</h3>
  </div>
 </div>

      <Footer />
    </>


  )
}
export default Bikes;