import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';

const Item = ({ title, price, image, item_id, description }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">${price}</p>
          <button
            type="button"
            onClick={() => dispatch(addItemToCart(item_id))}
            className="btn btn-success btn-block"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
