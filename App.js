import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">No<span>Spy.</span></a>
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contacts</a>
          <a href="#login" className="login-button">Log In</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>NAMASTE <span></span>INDIA</h1>
          <div className="text-animate">
            <h3>Avoid Spectatorship</h3>
          </div>
          <p>Allow your camera and microphone to speak in this digital age. Stay safe and let your wings soar.</p>

          <div className="btn-box">
            <a href="#" className="btn">Let's do</a>
            <a href="#" className="btn">Know More</a>
          </div>
        </div>
        <div className="home-sci">
          <a href="#"><i className="bx bxl-facebook"></i></a>
          <a href="#"><i className="bx bxl-twitter"></i></a>
          <a href="#"><i className="bx bxl-linkedin"></i></a>
        </div>
        <div className="home-imghover"></div>
      </section>

      <section className="about" id="about">
        <h3 className="heading">About <span>Us</span></h3>
        <div className="about-img">
          <img src="/3d-internet-secuirty-badge.jpg" alt="" />
          <div className="circle-spin"></div>
        </div>
        <div className="about-content">
          <h3 style={{ textAlign: 'center' }}>Avoid Spectatorship</h3>
          <p>In today's connected world, safeguarding our digital privileges is important.
            Our mission is to shield against spectatorship, which entails defending against
            unauthorized access to our cameras and microphones.With the increasing use of
            technology, such as smartphones, laptops, and smart devices, there is a growing
            concern about the potential for unauthorized individuals or entities to gain access
            to our camera and microphone feeds. This access can lead to privacy breaches, data theft,
            and invasive surveillance.<br />

            To "shield against spectatorship" means to take proactive measures to prevent and defend
            against such unauthorized access. This can involve using security features like device permissions,
            strong passwords, and encryption, as well as staying informed about potential vulnerabilities and
            practicing good cybersecurity hygiene.</p>
        </div>
      </section>

      <section className="services" id="services">
        <h3 className="heading">Our <span>Services</span></h3>

        <div className="service-card">
          <i className="bx bx-camera service-icon"></i>
          <h4 className="service-title">Camera Protection</h4>
          <p className="service-description">
            PROTECT YOUR PRIVACY BY SECURING YOUR CAMERA FROM UNAUTHORIZED ACCESS.
          </p>
        </div>

        <div className="service-card">
          <i className="bx bx-microphone service-icon"></i>
          <h4 className="service-title">Microphone Security</h4>
          <p className="service-description">
            SAFEGUARD YOUR CONVERSATIONS BY ENSURING YOUR MICROPHONE IS SECURE.
          </p>
        </div>

        <div className="service-card">
          <i className="bx bx-shield service-icon"></i>
          <h4 className="service-title">Digital Shielding</h4>
          <p className="service-description">
            UTILIZE ADVANCED DIGITAL SHIELDING TO PROTECT AGAINST CYBER THREATS.
          </p>
        </div>

        <a href="/Users/apple/Downloads/project.sh" download="your-package.sh" className="download-button">
          Download Debian Package      
        </a><br/><br/>

        <p className='download-button'>clone it from "https://github.com/CyberNinja2023/AvoidSpectatorship/"</p>
      </section>

      <section className="contact" id="contact">
        <h2 className="head">Contact Us<br />
          Your Voice is important for us</h2>
        <div className="row">
          <div className="col">
            <div className="box">
              <div className="icon"> <img src='instagram.png'/> </div>
              <div className="text">
                <h3>Address</h3>
                <p>cbit ,gandipet,hyderabad</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><img className='bx bxs-phone-call' src='instagram.png'/></div>
              <div className="text">
                <h3 id="ph">Phone</h3>
                <p>7207460197<br />9845226430</p>
              </div>
            </div>

            <div className="box">
              <div className="icon"><img className='bx bxs-envelope' src='instagram.png'/></div>
              <div className="text">
                <h3>Email</h3>
                <p>saikalyan0707@gmail.com<br />digna.padavala@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactform">
            <form>
              <h2>Send Message</h2>
              <div className="inputbox">
                <input type="text" name="" required="required" />
                <span>full name</span>
              </div><br />
              <div className="inputbox">
                <input type="text" name="" required="required" />
                <span>Email</span>
              </div><br />
              <div className="inputbox">
                <textarea required="required"></textarea>
                <span>Please write here....</span>
              </div><br />
              <div className="inputbox">
                <input type="submit" name="" value="Submit" />
              </div>
            </form>
          </div>

        </div>
      </section>
      <section class="login" id="login">
        <div class="login-content align-items:center">
          <h1>Login</h1>

          <form action="#">  <div class="form-group">
              <label for="username" style={{color:"black"}}>Username</label>
              <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
              <label for="password" style={{color:"black"}}>Password</label>
              <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit">Log In</button>
          </form>

          <a href="#" class="forgot-password">Forgot Password?</a>
        </div>
      </section>

    </div>
  );
}

export default App;
