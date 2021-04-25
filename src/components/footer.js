import React from 'react';
import Homeindicator from './homeIndicator';

const Footer = () => (
  <div className="wrap">
    <div className="footer-wrap">
      <ul className="footer-icons">
        <li>
          <a className="home-icon">
            <span />
          </a>
        </li>
        <li>
          <a className="clock-icon">
            <span />
          </a>
        </li>
        <li>
          <a className="phone-icon">
            <span />
          </a>
        </li>
        <li>
          <a className="profile-icon">
            <span />
          </a>
        </li>
      </ul>
      <Homeindicator />
    </div>
  </div>
);

export default Footer;
