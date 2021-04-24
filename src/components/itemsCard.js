import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ItemsCard = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    data: { image, title, price },
  } = props;
  return (
    <div key={uuidv4()} className="card-item">
      <img alt="" className="img-card" src={image} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-price">{price}$</p>
      </div>
    </div>
  );
};

export default ItemsCard;
