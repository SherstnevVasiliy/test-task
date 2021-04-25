import React from 'react';

const TopHeader = () => (
  <header className="wrap">
    <div className="header-wrap">
      <div>
        <p className="clock">9:41</p>
      </div>
      <ul className="icons">
        <li>
          <a className="network">
            <span />
          </a>
        </li>
        <li>
          <a className="wifi">
            <span />
          </a>
        </li>
        <li>
          <a className="battary">
            <span />
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default TopHeader;
