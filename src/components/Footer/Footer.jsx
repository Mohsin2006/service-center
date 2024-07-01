// src/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Service Center</h5>
            <p>
              Providing top-notch service for your needs. Contact us for more information and assistance.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
            <h5 className="text-uppercase">Contact Us</h5>
            <a href="https://facebook.com" className="btn btn-outline-primary btn-lg m-2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" className="btn btn-outline-danger btn-lg m-2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="tel:+1234567890" className="btn btn-outline-success btn-lg m-2">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; 2024 Service Center. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
