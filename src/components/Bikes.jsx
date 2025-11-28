import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Bikes.css";

const bikesData = [
  {
    id: 1,
    name: "Royal Enfield Classic 350",
    price: 999,
    img: "/images/classic350.jpg",
    engine: "346cc",
    mileage: "35 km/l",
    speed: "120 km/h",
    fuel: "Petrol",
  },
  {
    id: 2,
    name: "Yamaha MT-15",
    price: 899,
    img: "/images/mt15.jpg",
    engine: "155cc",
    mileage: "45 km/l",
    speed: "130 km/h",
    fuel: "Petrol",
  },
  {
    id: 3,
    name: "Honda Activa 6G",
    price: 499,
    img: "/images/activa6g.jpg",
    engine: "110cc",
    mileage: "50 km/l",
    speed: "85 km/h",
    fuel: "Petrol",
  },
  {
    id: 4,
    name: "KTM Duke 250",
    price: 1199,
    img: "/images/duke250.jpg",
    engine: "248cc",
    mileage: "35 km/l",
    speed: "148 km/h",
    fuel: "Petrol",
  },
  {
    id: 5,
    name: "Bajaj Pulsar NS200",
    price: 899,
    img: "/images/ns200.jpg",
    engine: "199cc",
    mileage: "36 km/l",
    speed: "140 km/h",
    fuel: "Petrol",
  },
  {
    id: 6,
    name: "KTM Duke 390",
    price: 1499,
    img: "/images/duke390.jpg",
    engine: "373cc",
    mileage: "25 km/l",
    speed: "160 km/h",
    fuel: "Petrol",
  },
  {
    id: 7,
    name: "TVS Apache RR310",
    price: 999,
    img: "/images/rr310.jpg",
    engine: "310cc",
    mileage: "33 km/l",
    speed: "160 km/h",
    fuel: "Petrol",
  },
  {
    id: 8,
    name: "RE Himalayan",
    price: 1299,
    img: "/images/himalayan.jpg",
    engine: "411cc",
    mileage: "30 km/l",
    speed: "145 km/h",
    fuel: "Petrol",
  },
  {
    id: 9,
    name: "Bajaj Dominar 400",
    price: 1200,
    img: "/images/dominar400.jpg",
    engine: "373cc",
    mileage: "25 km/l",
    speed: "160 km/h",
    fuel: "Petrol",
  },
  {
    id: 10,
    name: "Hero Splendor Plus",
    price: 350,
    img: "/images/splendor.jpg",
    engine: "97cc",
    mileage: "60 km/l",
    speed: "90 km/h",
    fuel: "Petrol",
  },
];

const Bikes = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="bikes-container">
        <h1 className="bikes-title">OUR BIKES</h1>

        <div className="bikes-grid">
          {bikesData.map((bike) => (
            <div key={bike.id} className="bike-card">
              <img src={bike.img} alt={bike.name} className="bike-img" />

              <h2 className="bike-name">{bike.name}</h2>
              <p className="bike-price">₹{bike.price} / Day</p>

              <div className="spec-grid">
                <div>
                  Engine: <span>{bike.engine}</span>
                </div>
                <div>
                  Mileage: <span>{bike.mileage}</span>
                </div>
                <div>
                  Speed: <span>{bike.speed}</span>
                </div>
                <div>
                  Fuel: <span>{bike.fuel}</span>
                </div>
              </div>

              <button
                className="book-btn"
                onClick={() => navigate("/booking", { state: bike })}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Bikes;
