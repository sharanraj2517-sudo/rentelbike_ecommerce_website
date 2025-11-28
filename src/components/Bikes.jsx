import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bikes.css";

const bikeData = [
  {
    img: "/bikes/new r.avif",
    name: "Royal Enfield Classic 350",
    price: "₹999 / Day",
    specs: [
      { icon: "fa-gauge", label: "Engine", value: "346cc" },
      { icon: "fa-gas-pump", label: "Mileage", value: "35 km/l" },
      { icon: "fa-bolt", label: "Speed", value: "120 km/h" },
      { icon: "fa-fire-flame-curved", label: "Fuel", value: "Petrol" },
    ],
  },
  {
    img: "/bikes/mt.avif",
    name: "Yamaha MT 15",
    price: "₹899 / Day",
    specs: [
      { icon: "fa-gauge", label: "Engine", value: "155cc" },
      { icon: "fa-gas-pump", label: "Mileage", value: "45 km/l" },
      { icon: "fa-bolt", label: "Speed", value: "130 km/h" },
      { icon: "fa-fire-flame-curved", label: "Fuel", value: "Petrol" },
    ],
  },
  {
    img: "/bikes/honda.avif",
    name: "Honda Activa 6G",
    price: "₹499 / Day",
    specs: [
      { icon: "fa-gauge", label: "Engine", value: "110cc" },
      { icon: "fa-gas-pump", label: "Mileage", value: "50 km/l" },
      { icon: "fa-bolt", label: "Speed", value: "85 km/h" },
      { icon: "fa-fire-flame-curved", label: "Fuel", value: "Petrol" },
    ],
  },
  {
    img: "/bikes/duke.avif",
    name: "KTM Duke 200",
    price: "₹999 / Day",
    specs: [
      { icon: "fa-gauge", label: "Engine", value: "199cc" },
      { icon: "fa-gas-pump", label: "Mileage", value: "35 km/l" },
      { icon: "fa-bolt", label: "Speed", value: "138 km/h" },
      { icon: "fa-fire-flame-curved", label: "Fuel", value: "Petrol" },
    ],
  },
  {
    img: "/bikes/pulsar.avif",
    name: "Bajaj Pulsar 220",
    price: "₹799 / Day",
    specs: [
      { icon: "fa-gauge", label: "Engine", value: "199.5cc" },
      { icon: "fa-gas-pump", label: "Mileage", value: "40 km/l" },
      { icon: "fa-bolt", label: "Speed", value: "160 km/h" },
      { icon: "fa-fire-flame-curved", label: "Fuel", value: "Petrol" },
    ],
  },
  {
    img: "/bikes/him.avif",
    name: "Royal Enfield Himalayan",
    price: "₹1199 / Day",
    specs: [
      { icon: "fa-gauge", label: "Engine", value: "411cc" },
      { icon: "fa-gas-pump", label: "Mileage", value: "30 km/l" },
      { icon: "fa-bolt", label: "Speed", value: "140 km/h" },
      { icon: "fa-fire-flame-curved", label: "Fuel", value: "Petrol" },
    ],
  },
  {
    img: "/bikes/310.avif",
    name: "Apache RR310",
    price: "₹899 / Day",
    specs: [
      { icon: "fa-gauge", label: "Engine", value: "312.2cc" },
      { icon: "fa-gas-pump", label: "Mileage", value: "35 km/l" },
      { icon: "fa-bolt", label: "Speed", value: "180 km/h" },
      { icon: "fa-fire-flame-curved", label: "Fuel", value: "Petrol" },
    ],
  },
  {
    img: "/bikes/rc.avif",
    name: "RC 390",
    price: "₹1299 / Day",
    specs: [
      { icon: "fa-gauge", label: "Engine", value: "373.27cc" },
      { icon: "fa-gas-pump", label: "Mileage", value: "25 km/l" },
      { icon: "fa-bolt", label: "Speed", value: "170 km/h" },
      { icon: "fa-fire-flame-curved", label: "Fuel", value: "Petrol" },
    ],
  },
  {
    img: "/bikes/400.avif",
    name: "Dominar 400",
    price: "₹1200 / Day",
    specs: [
      { icon: "fa-gauge", label: "Engine", value: "373.3cc" },
      { icon: "fa-gas-pump", label: "Mileage", value: "25 km/l" },
      { icon: "fa-bolt", label: "Speed", value: "160 km/h" },
      { icon: "fa-fire-flame-curved", label: "Fuel", value: "Petrol" },
    ],
  },
];

function Bikes() {
  const navigate = useNavigate();

  return (
    <div className="bikes-page">
      <div className="header">
        <h1>OUR BIKES</h1>
        <p>Select from our premium fleet of well-maintained rental bikes</p>
      </div>

      <section className="bikes-section">
        <div className="bikes-grid">
          {bikeData.map((bike, index) => (
            <div className="bike-card" key={index}>
              <img src={bike.img} alt={bike.name} />
              <h3>{bike.name}</h3>
              <p className="price">{bike.price}</p>

              <div className="bike-specs">
                {bike.specs.map((s, i) => (
                  <div key={i}>
                    <i className={`fa-solid ${s.icon}`}></i>
                    {s.label}: <span>{s.value}</span>
                  </div>
                ))}
              </div>

              <button
                className="book-btn"
                onClick={() => navigate("/booking")}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Bikes;