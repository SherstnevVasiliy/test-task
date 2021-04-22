import React, { useState, useEffect } from 'react';
import './mainPage.css';
import axios from 'axios';

const Catalog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loginFunc = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        alert(err);
      }
    };
    loginFunc();
  }, []);

  return (
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
      <section>
        <ul className="section-catalog">
          <li className="section-popular">
            <a>Популярное</a>
          </li>
          <li className="section-view-all">
            <a>Смотреть все</a>
          </li>
        </ul>
        <div className="section-vitrina">
          {data.map((elem) => elem.category)}
        </div>
      </section>
    </div>
  );
};

export default Catalog;
