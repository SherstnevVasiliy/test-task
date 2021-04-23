/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const NavElement = (props) => {
  const { data, id } = props;
  let className = '';
  if (!id) {
    className = 'nav-item nav-item-active';
  } else {
    className = 'nav-item';
  }
  const handleClick = () => {
    const navItem = document.querySelectorAll('.nav-item');
    console.log(navItem);
    console.log('click');
    navItem.forEach((el) => {
      if (el.classList.contains('nav-item-active')) {
        el.classList.remove('nav-item-active');
      }
      if (el.id === id.toString()) {
        el.classList.add('nav-item-active');
      }
    });
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li key={uuidv4()} id={id} className={className} onClick={handleClick}>
      <a>{data}</a>
    </li>
  );
};

export default NavElement;
