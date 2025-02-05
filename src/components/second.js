import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import myImage from "./img/img-1.jpg";
const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

const Hero = () => (
  <section className="hero" id="hero">
    <div className="hero-text">
      <h3>Hello, It's Me </h3>
      <h1>Prince Arya</h1>
      <h3>And I'm a <span>Frontend Developer</span></h3>
      <p>Specializing in creating beautiful and functional websites. Let’s bring your ideas to life!</p>
      <div className="socials">
        <a href="https://www.facebook.com/profile.php?id=100026889529908"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/prince-arya8/"><FaLinkedin /></a>
        <a href="https://x.com/PrinceArya3773"><FaTwitter /></a>
        <a href="https://www.instagram.com/_prince.arya_/"><FaInstagram /></a>
      </div>
      <div className="hero-buttons">
        <a href="cv/resum.pdf"           className="primary">Download CV</a>
        <a href="#" className="second">Hire Me</a>
      </div>
    </div>
    <div className="hero-image">
    <img src={myImage} alt="Description" width="300" />
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="services">
    <h2>Our <span>Services</span></h2>
    <div className="service-boxes">
      <div className="service-box">
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="service-box">
        <h3>Graphic Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="service-box">
        <h3>Digital Marketing</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="about" id="about">
    <div className="about-img">
    <img src="./img/img-1.jpg" alt="Description" width="300" />
    </div>
    <div className="about-content">
      <h2 className="heading">About <span>Me</span></h2>
      <h3>Frontend Developer</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
      <a href="#" className="btn">Read more</a>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact <span>Me</span></h2>
    <form>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default App;
