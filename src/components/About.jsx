import React from "react";
import "./About.css";
import Footer from "./Footer";

const About = () => {
  const cities = [
    { name: "COIMBATORE", img: "mumbai.png" },
    { name: "DELHI", img: "delhi.png" },
    { name: "MUMBAI", img: "mumbai.png" },
    { name: "PONDICHERRY", img: "pondy.png" },
    { name: "TRICHY", img: "tric.png" },
    { name: "BANGALORE", img: "bengaluru.png" },
    { name: "HYDERABAD", img: "hyderabad.png" },
    { name: "GOA", img: "goa.png" },
  ];

  return (
    <>
      {/* ⭐ TOP BACKGROUND IMAGE */}
      <div className="about-hero">
        <img src="bikes.avif" alt="Bikes Banner" className="about-hero-img" />
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
