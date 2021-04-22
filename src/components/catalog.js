import React from 'react';
import './mainPage.css';

const Catalog = () => (
  <div className="wrap">
    <div className="page-header">
      <span className="page-header-arrow">
        <img alt="" />
      </span>
      <p className="page-header-catalog">Каталог</p>
      <figure className="smile-avatar" />
    </div>
    <form className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Найти товар..."
      />
    </form>
  </div>
);

export default Catalog;
