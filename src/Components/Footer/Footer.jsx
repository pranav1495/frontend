import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Icons

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container-fluid text-center py-3">
        <div className="row justify-content-center">
          {/* Brand Section */}
          <div className="col-md-4 mb-2">
            <h4>Park Visits</h4>
            <p className="text-muted">Enhancing visitor experiences with seamless management.</p>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-2">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/equizzlearts" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/equizzle_arts/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/k-pranav-eswar1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-2">
          <p className="text-muted">&copy; {new Date().getFullYear()} Park Visits. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
