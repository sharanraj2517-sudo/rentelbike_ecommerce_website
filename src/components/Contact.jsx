import React from "react";
import { useNavigate } from "react-router-dom";
import "./Conmtact.css";
import Footer from "./Footer";

const Contact = () => {


  return (
    <div className="container">
      <div className="cnt-box">
        <div>
          <h3>DELHI</h3>
          <p>Coming Soon.</p>
        </div>

        <div>
          <h3>COIMBATORE</h3>
          <p>Annamalai Tower Basement 233, 2 nd Street,Gadhipuram
            Coimbatore Tamilnadu - 641012.</p>
        </div>

        <div>
          <h3>Pondichery</h3>
          <p>Coming soon</p>
        </div>

        <div>
          <h3>Bangalore</h3>
          <p>Coming soon</p>
        </div>

        <div>
          <h3>GOA</h3>
          <p>Coming soon</p>
        </div>

        <div>
          <h3>Bhubaneshwar</h3>
          <p>Plot No - 613/2299 P.S Khandagiri Jagamara, Khandagiri, Bhubaneswar,
            Odisha 7510300 Ph:94377 30983</p>
        </div>
      </div>


      <div className="container">
        <div className="cnt-box">
          <h3>MUMBAI</h3>
          <p>Coming soon</p>
          </div>

          <div>
            <h3>SALEM</h3>
            <p>383/5, NKN Building, Ram Bazzar, Omalur Main Road, Salem - 636004,Tamil Nadu.</p>
          </div>

          <div>
            <h3>TRICHY</h3>
            <p>Coming soon</p>
          </div>

          <div>
            <h3>Hyderabad</h3>
            <p>Coming Soon.</p>
          </div>

          <div>
            <h3>tirupur</h3>
            <p>2nd Kurinji Nagar, 1st Street,Sheriff colony extension, Tiruppur-4</p>
          </div>
      </div>
    </div>
  )
}