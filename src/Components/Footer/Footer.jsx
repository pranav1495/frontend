import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Icons

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container-fluid text-justify py-5">
        <div className="row">
          {/* Brand Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h4>Park Visits</h4>
            <p className="text-muted">Enhancing visitor experiences with seamless management.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/equizzlearts" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/equizzle_arts/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/k-pranav-eswar1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4">
          <p className="text-muted">&copy; {new Date().getFullYear()} Park Visits. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
