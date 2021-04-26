import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CategoryItem = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    data: { image, title },
  } = props;

  return (
    <div key={uuidv4()} className="category-item">
      <div className="card-category-body">
        <p className="card-category-title">{title}</p>
        <div className="detailed-wrap">
          <p className="detailed">Подробнее</p>
          <span className="detailed-arrow">
            <img alt="" />
          </span>
        </div>
      </div>
      <img alt="" className="img-card-category" src={image} />
    </div>
  );
};

export default CategoryItem;
