import React from "react";
import "./About.css";
import Footer from "./Footer";

const About = () => {
  const cities = [
    { name: "COIMBATORE", img: "/city-icons/gate.png" },
    { name: "DELHI", img: "/city-icons/building.png" },
    { name: "MUMBAI", img: "/city-icons/gate.png" },
    { name: "PONDICHERRY", img: "/city-icons/building.png" },
    { name: "TRICHY", img: "/city-icons/gate.png" },
    { name: "BANGALORE", img: "/city-icons/building.png" },
    { name: "HYDERABAD", img: "/city-icons/gate.png" },
    { name: "GOA", img: "/city-icons/building.png" },
  ];

  return (
    <>
      {/* ⭐ TOP BACKGROUND IMAGE */}
      <div className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1520974741544-8a529f0a1a9e"
          alt="Bikes Banner"
          className="about-hero-img"
        />
      </div>

      {/* ⭐ CONTENT SECTION */}
      <div className="about-container">
        <h1 className="about-title">LOWEST PRICE GUARANTEE</h1>
        <p className="about-text">
          We provide high-quality, well-maintained bikes from recent models
          ranging from 2017 to 2019. Choose your dream bike and enjoy the best
          rental price.
        </p>

        <h2 className="about-sub">ROADSIDE ASSISTANCE</h2>
        <p className="about-text">
          24/7 roadside assistance ensures safe and comfortable travel.
        </p>

        <h2 className="about-sub">HELMETS</h2>
        <p className="about-text">
          We provide premium helmets free for both rider and pillion.
        </p>

        <h2 className="about-sub">MINIMUM PAPER WORK</h2>
        <p className="about-text">
          Quick documentation and easy verification process.
        </p>

        <h2 className="about-sub">QUALITY MOTORCYCLES</h2>
        <p className="about-text">
          Regular servicing ensures your rental bike always performs perfectly.
        </p>

        <h2 className="about-sub">SERVICEABILITY</h2>
        <p className="about-text">
          Hassle-free booking, great support, and smooth riding experience.
        </p>

        {/* ⭐ FIND US IN YOUR CITY */}
        <h1 className="city-title">FIND US IN YOUR CITY</h1>

        <div className="city-grid">
          {cities.map((city, index) => (
            <div className="city-box upgraded" key={index}>
              <img src={city.img} alt={city.name} />
              <p>{city.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
