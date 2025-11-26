import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <h1>ihihihii</h1>
      <div className="hero-section">
        <video autoPlay loop muted className="bg-video">
          <source
            src="https://www.relaxbikes.com/asset/v2/images/relaxbikes.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-content">
          <h1 className="hero-title">
            THE RIDE
            <br />
            OF YOUR LIFE
          </h1>

          <div className="rent-box">
            <h2>RENT A MOTORCYCLE</h2>

            <div className="rented">
              <select>
                <option>Select City</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
              </select>

              <select>
                <option>Select Categories</option>
                <option value="Scooter">Scooter</option>
                <option value="Sports Bike">Sports Bike</option>
                <option value="Adventure">Adventure</option>
                <option value="Cruiser">Cruiser</option>
              </select>

              <input type="datetime-local" />
              <input type="datetime-local" />
            </div>

            {/* FIXED: Search button with navigation */}
            <button onClick={() => navigate("/bikes")}>SEARCH NOW</button>
          </div>
        </div>
      </div>

      {/* WHY RIDE SECTION */}
      <div className="why-container">
        <h1 className="why-title">WHY RIDE WITH RELAX BIKES?</h1>
        <h3 className="why-sub">RELAX RENTALS BIKES</h3>

        <p className="why-text">
          Why choose Relax Rent Bikes? When we travel in unknown cities with a
          bike, it feels like home. Relax bikes give freedom and peace of mind
          while exploring new places.
        </p>

        <p className="why-text">
          Think about travel, think about freedom, think about bikes. Relax
          bikes give you wings to travel confidently anywhere in India.
        </p>

        <div className="why-icons">
          <div className="icon-circle">✔</div>
          <div className="icon-circle">🏍</div>
          <div className="icon-circle">🎧</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
