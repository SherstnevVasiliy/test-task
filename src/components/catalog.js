/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './mainPage.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import ItemsCard from './itemsCard';
import NavItem from './navElement';
import CategoryItem from './categoryItem';
import Swiper from '../helpers/swiper';
import { profileView } from '../store/actions/action';

const Catalog = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const activeCategoryId = useSelector((state) => state.activeCategoryId);

  const handleClick = () => {
    dispatch(profileView(true));
  };

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        const catArr = response.data.slice();
        setCategory([...new Set(catArr.map((elem) => elem.category))]);
        localStorage.setItem('itemsCount', response.data.length);
      } catch (err) {
        alert(err);
      }
    };
    getItem();
    Swiper();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrap">
      <div className="page-header">
        <span className="page-header-arrow">
          <img alt="" />
        </span>
        <p className="page-header-catalog">Каталог</p>
        <figure onClick={handleClick}>
          <img
            alt=""
            className="smile-avatar"
            src="https://i.ibb.co/Kb1cCy5/avatar.jpg"
          />
        </figure>
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
        <div className="section-vitrina-line">
          <div className="section-vitrina">
            {data.map((itemCards) => (
              <ItemsCard
                className="items-card"
                data={itemCards}
                key={uuidv4()}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="section-wrap">
          <nav className="section-nav">
            <ul>
              {category.map((itemCards, index) => (
                <NavItem data={itemCards} id={index} key={uuidv4()} />
              ))}
            </ul>
          </nav>
          <div className="category-vitrina-line">
            <div className="category-vitrina">
              {data
                .filter(
                  (itemCards) =>
                    itemCards.category === category[activeCategoryId]
                )
                .map((elem) => (
                  <CategoryItem
                    className="items-card"
                    data={elem}
                    key={uuidv4()}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
