import React from "react";
import { useNavigate } from "react-router-dom";
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
    { name: "GOA", img: "goa.png" }
  ];

  const team = [
    {
      name: "Sanjay Kumar",
      role: "Founder & CEO",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "Rocky",
      role: "Operations Manager",
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
    },
    {
      name: "Priya",
      role: "Lead Mechanic",
      img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
    },
    {
      name: "Divya Nair",
      role: "Customer Support",
      img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    }
  ];

  return (
    <>
      <div className="about-hero">
        <img src="bikes.avif" alt="Bike Banner" className="about-hero-img" />
      </div>

      <div className="about-container">
        <h1 className="about-title">LOWEST PRICE GUARANTEE</h1>
        <p className="about-text">
          We provide high-quality and well-maintained bikes at the best price.
        </p>

        <h2 className="about-sub">ROADSIDE ASSISTANCE</h2>
        <p className="about-text">We offer 24/7 roadside assistance.</p>

        <h2 className="about-sub">HELMETS</h2>
        <p className="about-text">Free helmets for rider and pillion.</p>

        <h2 className="about-sub">MINIMUM PAPER WORK</h2>
        <p className="about-text">Quick documentation, easy process.</p>

        <h2 className="about-sub">QUALITY MOTORCYCLES</h2>
        <p className="about-text">Regular service & maintenance.</p>

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

      <h1 className="team-title">MEET OUR TEAM</h1>
      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default About;
